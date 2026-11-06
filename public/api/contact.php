<?php
// Evitar que erros do PHP quebrem a resposta JSON
error_reporting(0);
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Ler dados JSON ou FormData
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Por favor preencha o Nome, Email e Mensagem.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Endereço de email inválido.']);
    exit;
}

// Validação de telefone (se fornecido)
if (!empty($phone) && $phone !== '-') {
    $phoneDigits = preg_replace('/[^0-9]/', '', $phone);
    // Aceita formatos com indicativo internacional (+351 ...) ou números locais (mínimo 7 e máximo 15 dígitos)
    if (!preg_match('/^[+]?[(]?[0-9]{1,4}[)]?[-\s.\/0-9]{6,15}$/', $phone) || strlen($phoneDigits) < 7 || strlen($phoneDigits) > 15) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Número de telefone inválido.']);
        exit;
    }
} else {
    $phone = '-';
}

$to = 'apoioaocliente@epexe.pt';
$subject = '=?UTF-8?B?' . base64_encode('Novo contacto no site ÉPÊXE — ' . $name) . '?=';

$body = "Novo contacto recebido no site ÉPÊXE:\n\n";
$body .= "Nome: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Telefone: " . $phone . "\n\n";
$body .= "Mensagem:\n" . $message . "\n";

// No Plesk / Linux Postfix, os cabeçalhos têm de usar \r\n padrão
// e o envelope sender (-f) é obrigatório se o postfix exigir sender do domínio
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: ÉPÊXE <{$to}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Tenta enviar com o parâmetro -f (envelope sender do domínio autenticado do Plesk)
$extra = "-f{$to}";
$sent = @mail($to, $subject, $body, $headers, $extra);

// Se falhou com o parâmetro extra, tenta sem o parâmetro
if (!$sent) {
    $sent = @mail($to, $subject, $body, $headers);
}

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    // Registar no log do PHP o erro detalhado
    $lastError = error_get_last();
    error_log("Falha no mail() do PHP em epexe.pt: " . ($lastError['message'] ?? 'Desconhecido'));

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'O servidor não conseguiu despachar o email. Verifique se o serviço de Mail está ativo no domínio no Plesk.'
    ]);
}
