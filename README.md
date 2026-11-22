# Bravo Study Tools

Free study tools for Bravo Company OCS candidates, live at **https://ocs-bravo-study.github.io/**.
They run in any phone or computer browser. There is no sign-in, no server, and no data collection.

| Tool | Address | What it drills |
| --- | --- | --- |
| Phase Up Recall | `/phaseup/` | The cadre knowledge sheet, learned a few pieces at a time |
| ASIP radio | `/asip/` | AN/PRC-119F (RT-1523E): load single-channel frequencies |
| MBITR radio | `/mbitr/` | AN/PRC-148: load a SINCGARS single-channel frequency |
| Weapons 3D | `/weapons/` | M249 / M240B maintenance: take apart and put back |
| Weapons drills | `/weapons/drills/` | Clearing, functions check, load / malfunction / unload |

## How it is built

- Each tool is **one HTML file** (`<tool>/index.html`) with its own CSS and JavaScript inside. No build step, no packages.
- The 3D weapons pages use Three.js 0.160.0, kept in `vendor/three-0.160.0/` (MIT license in that folder) so the site
  depends on nothing outside github.io. Don't change the version without testing both weapons pages.
- The weapons demo videos are in `weapons/video/`.
- Progress and settings stay in each visitor's browser (localStorage). Changing the site's address resets everyone's progress.
- The old address `asip-trainer.github.io` forwards to this site; Phase Up progress comes along (`#carry=`).

## Rules for the content

- The class score sheets and the cadre knowledge sheet win over field manuals. When a new class gets a different sheet,
  change the tool to match the sheet.
- Phase Up Recall: all content is the `SECTIONS` array near the top of `phaseup/index.html`. Spelling never counts.
- Radio and weapons trainers: Guided mode coaches and blocks wrong presses; Exam grades like the lane, with the sheet's time limit.

## How to change something

1. Open the file on GitHub, press the pencil (Edit), make the change, and commit it to `main`.
2. GitHub Pages publishes it in a minute or two. Phones may keep the old page for up to 10 minutes; reload to check.
3. Try the tool on a phone after every change, in Guided and in Exam.

## Keeping it alive

- The site lives in the GitHub organization `ocs-bravo-study`. It stays up as long as the organization has at least one owner.
- Before you graduate, add the next maintainer (a candidate from a later class, or cadre) as an **owner** of the organization:
  Organization → People → Invite member → role Owner.
- GitHub Pages is free for public repositories. Keep this repository public.
