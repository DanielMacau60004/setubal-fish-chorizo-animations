<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Theme state is shared through ThemeProvider, with an early browser script applying the saved or system theme before paint; this keeps the intro and navigation consistent.
- The site header switches to a collapsible navigation below the desktop breakpoint; this prevents narrow-screen navigation overflow.
- Product and dish records live in individual Portuguese-keyed JSON files under src/content with images in its imagens folder; eager Vite globs validate and map these records so new files need no code registration, and asset pointers are supported for uploaded media.
