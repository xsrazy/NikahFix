# NikahFix

A personal Netflix-style digital wedding invitation website: **Usra & Zee** (Usra & Azizi Asadel), coming soon Monday, 17 January 2050.

Live: https://nikahfix.xsrazy.web.id

![Usra & Zee: Menikah, coming soon on NikahFix](public/og-image.jpg)

> **This project is a modification** of the open-source NikahFix project by [janexmgd](https://github.com/janexmgd): the frontend [janexmgd/nikahfix-fe](https://github.com/janexmgd/nikahfix-fe) and the backend [janexmgd/nikahfix-be](https://github.com/janexmgd/nikahfix-be). The site's theme and framework are kept; what changed is all of its personal content, its media assets, and an origin lock added to the backend. The full list of changes is in [Modifications](#modifications-from-the-original-project).

## About

NikahFix turns a wedding invitation into a streaming-service experience. Guests open the invitation through a Netflix-style profile picker ("Who's Watching"), so the invitation they see is addressed to them personally.

The featured title is "Usra & Zee: Menikah", a documentary of an intimate wedding in "Antah-berantah", attended only by family and the closest people.

## Features

- "Who's Watching" opening screen: the guest taps their name (CLICK YOUR NAME) to open their invitation, mimicking the Netflix profile picker
- Personalized invitation content for the guest who opened it
- Title page styled like a streaming title: "100% match", an "SU" maturity rating, "2050 · 1h 26m", 4K badges, and a red "Coming soon" banner
- "Our Love Story" as an episode picker: three episodes plus "[Coming Soon] Final Episode: The Beginning of Forever"
- "Breaking News", "Bride and Groom", and "Our Love Gallery" (9 photos) sections
- "Wish for the couple" guestbook: guests can read and post wishes, one wish per name
- Netflix visual theme: black interface with red accents
- Complete SEO: meta description, Open Graph and Twitter cards with a Netflix-poster share image, canonical, robots.txt and sitemap.xml

## Architecture

- Frontend: Vite + React + Tailwind CSS (this repository), with React Router, Axios, React Player, and Lucide. The guestbook is fetched from `${VITE_API_URL}/wish`
- Backend: a separate private repository, `nikahfix-be-v2` (Express + Supabase), live at https://nikahfix-be-ebon.vercel.app
- Database: the `wishs` table in Supabase (PostgreSQL)
- Frontend hosting: Vercel, connected to this repository; pushes to `main` deploy automatically

## API (Backend)

| Method | Endpoint | Function |
| --- | --- | --- |
| GET | `/` | Health check |
| GET | `/wish` | List all wishes |
| POST | `/wish` | Post a wish `{name, message}`; the name must be at least 3 characters; one name can only post one wish (case-insensitive) |

All endpoints are origin-locked: requests are only served when the Origin/Referer header comes from nikahfix.xsrazy.web.id, nikahfix.web.id, a `nikahfix*` Vercel deployment, or localhost. Anything else gets a 403.

## Environment Variables

Frontend:

- `VITE_API_URL`: the backend address

Backend:

- `SUPABASE_URL`, `SUPABASE_KEY`: the Supabase connection
- `APP_PORT`: the server port (default 3000)
- `APP_NAME`: the app name used in the health check message

## Modifications from the Original Project

Frontend (from janexmgd/nikahfix-fe):

- **Couple personalization**: Denny & Echidna replaced with Usra & Zee (Azizi Asadel), including the `<title>` becoming "Nikahfix - Usra & Azizi Asadel"
- **Date**: 24 October / 24 December 2024 replaced with Monday, 17 January 2050 (cover and "Coming soon" banner)
- **Featured title**: "Denny & Echidna: Nikah Ama Anime" replaced with "Usra & Zee: Menikah", with the cover subtitle "Sebelum Hari H"
- **Synopsis rewritten**: the isekai setting replaced with Antah-berantah; in the invitation letter, the Bekasi venue replaced with Antah-berantah
- **Episode synopses rewritten**, including the closing joke changed to "Kasihan VVOTA halu cuy"
- **Hashtags**: #animegirls and #echidnabestgirls replaced with #OhMyZee and #zeebestgirls
- **Media fully replaced** (17 new assets): the Zee.mp4 video, the Zee-UI.png header, the 8.jpg cover poster, episode thumbnails zee1.jpg to zee6.jpg, and the gallery 1.jpg to 9.jpg. In the original, the gallery and thumbnails reused a single photo over and over
- **Footer**: the "Cloning with ❤️ by janexmgd" credit is kept; "supported by Echidna" replaced with "supported by SGBTeam"; the nikahfix.com link replaced with a link to this repository
- Apart from `HomePage.jsx`, `DetailPage.jsx`, and `index.html`, the entire frontend code is identical to the original: components, configuration, and dependencies are unchanged

Backend (from janexmgd/nikahfix-be, now in the `nikahfix-be-v2` repository):

- **New repository** with a clean history (22 October 2026), kept private; the code is based on janexmgd's nikahfix-be
- **Origin lock added** (API lock): an Origin/Referer checking middleware with an allowlist of hosts; requests from outside the list are rejected with 403. The original had no such check
- **Built-in rate limiter removed**: express-rate-limit (previously 5 requests per 5 seconds on POST /wish) and its dependency are no longer used
- Everything else is unchanged from the original: the endpoints, validation, the `wishs` table, and the Vercel configuration

Repository and releases:

- LICENSE (MIT) and FUNDING added; README, About, and topics tidied up
- SEO and Open Graph added (October 2026): complete metadata, a Netflix-style OG poster, robots.txt, sitemap.xml, a favicon type fix, and the v1.1.0 release

## Notes

- At the last check, 11 wishes were stored in the backend

## Credits

The original project is by [janexmgd](https://github.com/janexmgd): [nikahfix-fe](https://github.com/janexmgd/nikahfix-fe) and [nikahfix-be](https://github.com/janexmgd/nikahfix-be). Thank you to the original author; this repository is a modification for personal use.

## License

MIT. See the `LICENSE` file.
