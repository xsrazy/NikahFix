# NikahFix

A digital wedding invitation for Usra & Azizi Asadel, styled after Netflix. Guests pick their own name on the opening screen to enter the invitation addressed to them.

Live: https://nikahfix.xsrazy.web.id

## About

NikahFix turns a wedding invitation into a streaming-service experience. Instead of a generic link, every guest opens the invitation through a Netflix-style profile picker, so the invitation they see is addressed to them personally.

## Features

- "Who's Watching" opening screen: the guest taps their name (CLICK YOUR NAME) to open their invitation, mimicking the Netflix profile picker
- Personalized invitation content with the wedding event details for the guest who opened it
- Wishes: guests can write greetings and well-wishes, and the list is shown on the page
- Netflix-style visual theme: dark interface with red accents

## Architecture

- Frontend: Vite + React single page application. This repository contains only the frontend
- Backend: a separate repository, `nikahfix-be-v2` (Express + Supabase). It stores wishes in the `wishs` table of the `nikahfix` Supabase project and provides the endpoints to submit and read wishes
- Access lock: the backend only serves requests whose Origin or Referer is nikahfix.xsrazy.web.id, nikahfix.web.id, this project's Vercel deployments, or localhost; requests from other origins are rejected with 403

## Notes

- At the last check, 11 wishes were stored in the backend

## Credits

NikahFix is based on the open-source NikahFix project originally created by [janexmgd](https://github.com/janexmgd). Thank you to the original author for building the template this site is based on.

## License

MIT. See [LICENSE](LICENSE).
