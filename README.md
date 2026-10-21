# NikahFix

**Live: https://nikahfix.xsrazy.web.id**

NikahFix is a digital wedding invitation for Usra & Azizi Asadel, styled after Netflix. Guests pick their own name on the opening screen to enter the invitation addressed to them.

## Site Contents

- **"Who's Watching" opening screen:** the guest taps their name (CLICK YOUR NAME) to open their invitation, mimicking the Netflix profile picker.
- **Invitation content:** the wedding event details for the guest who opened it.
- **Wishes:** guests can write greetings and well-wishes; the list is shown on the page and stored in the backend. At the last check there were 11 stored wishes.

## Frontend

- Vite + React single page application (this repo contains only the frontend).
- The visual theme follows the Netflix interface: dark, red accents, and a profile selection screen.

## Backend

- The backend lives in a separate repo: `nikahfix-be` (Express + Supabase).
- It stores wishes in the `wishs` table of the `nikahfix` Supabase project and provides the endpoints to submit and read wishes.
- Backend access is locked by Origin/Referer: only nikahfix.xsrazy.web.id, nikahfix.web.id, this project's Vercel deployments, and localhost are served; requests from other origins are rejected with 403.
