<div align="center">

# Quest Log

**Track your games. Chase the platinum. Never lose the thread.**

[![React](<https://img.shields.io/badge/Frontend-React%20(CRA)-61DAFB?logo=react&logoColor=white>)](https://react.dev/)
[![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![npm](https://img.shields.io/badge/Package%20Manager-npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Status](<https://img.shields.io/badge/status-v1.0%20(stopped)-lightgrey>)]()

</div>

---

## About

**Quest Log** is a web application built for gamers who want a clean, central place to log their gaming journey. Track what you've finished, what you're currently grinding through, and how long it took to get there.

This project was built as a **team assignment**, developed under **Agile principles** with a **rotating Scrum Master** role, and managed through **Jira**.

### Features

- **Trophy Tracking** — log how many trophies/achievements you've earned per game
- **Game Library** — keep a record of finished and in-progress games
- **Playtime Logging** — track how long it took to complete each title
- **Game Recommendations** — browse a curated list of trending games

---

## Demo

<div align="center">

![Quest Log Demo](./frontend/assets/questLog.gif)

</div>

---

## Built With

| Layer                  | Tools                                 |
| ---------------------- | ------------------------------------- |
| **Frontend**           | React (Create React App), Bootstrap   |
| **Backend**            | Firebase — Firestore & Authentication |
| **Package Management** | npm                                   |
| **Testing**            | Jest, React Testing Library           |
| **CI/CD**              | GitHub Actions -> GitHub Pages        |

> _Deprecated tooling noted for historical reference — CRA is no longer actively maintained upstream, but is retained here as the original project setup._

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed

### Installation

```bash
# Clone the repo
git clone <repo-url>

# Install root dependencies
npm install

# Move into the frontend folder
cd frontend

# Start the development server
npm start
```

The app will be available at `http://localhost:3000`.

---

## Usage

**Live link:** _([https://hashtag47.github.io/quest-log/](https://hashtag47.github.io/quest-log/))_

---

## Testing & CI/CD

Automated component tests and a CI/CD pipeline were added so the site no longer has to be tested and deployed by hand.

### Pipeline

Every push and pull request to `main` runs the workflow in [`.github/workflows/ci-cd.yml`](./.github/workflows/ci-cd.yml):

```
push / pull request → install (npm ci) → run tests (Jest) → build → deploy to GitHub Pages
```

- **Tests fail → the pipeline stops** and nothing is deployed.
- **Pull requests** are tested and built, but only pushes to `main` are deployed.
- **Firebase config** is supplied at build time from GitHub Actions secrets, not stored in the repo.

### Tests

Component tests are written with **Jest** and **React Testing Library**. For example, [`GameCardNoButtons.test.js`](./frontend/src/components/GameCardNoButtons.test.js) checks that a game card:

- shows the game's title, rating, trophy count and poster
- falls back to **0 trophies** when none are recorded
- calls its `onClick` handler exactly once when clicked
<div align="center">
![Jest test results](./frontend/assets/Jest.jpg)

</div>
### Running the tests locally
 
```bash
cd frontend
npm test                      # watch mode
npm test -- --watchAll=false  # run once, as in CI
```
 
---

## Authors & Acknowledgment

**Frontend Team**

- Jonathan
- YuHang
- Eoin

**Backend Team**

- Oisín
- Siqi

---

## Project Status

> **Currently stopped at version 1.0**

This project is not under active development at the moment. Contributions, forks, and feedback are still welcome.

---
