# WEB GAMES

This project is focused on exploring how does full-stack development works and on working with PostgreSQL. You can see currently deployed version [here](http://web-games.surge.sh/)

- [Quick start](#quick-start)
    - [Cloning](#cloning)
    - [Branches](#branches)
    - [Installing dependencies](#installing-dependencies)
- [Usage](#usage)
    - [Build](#build)
    - [Local development](#local-development)
- [Documentation](#documentation)
- [Contribution](#Contribution)
    - [Code style and rules](#code-style-and-rules)
- [Future plans](#future-plans)
- [Supporting](#supporting)


## Quick start
### Cloning
To clone into this project use
```bash
git clone git@github.com:SmarterFuture/web-games.git
cd web-games
```
or if you do have GitHub CLI you can use
```bash
gh repo clone SmarterFuture/web-games
cd web-games
```

### Branches
To get currently tested and deployed version use **main** branch
```bash
git checkout main
git pull origin main
```

### Installing dependencies
To install all node modules run
```bash
npm install
```

## Usage
After installing all node modules you can run:

### Build
To compile optimized version
```bash
npm run build
```

### Local development
To start local development front-end server
```bash
npm run start
```

## Documentation
TODO: add documentation
Documentation currently does not exist

## Contribution
Push only to your own branch
```bash
git checkout <your_branch>
git pull origin <your_branch>
git add .
git commit -m "Commit message"
git push origin <your_branch>
```
Merge requests are welcomed.

### Code style and rules
We follow [these best practices](https://medium.com/@warkiringoda/typescript-best-practices-2021-a58aee199661) and TODO formatter

### Assets library
All assets can be found [here](https://photos.app.goo.gl/hTfLajd9mGdzwqEc6)

## Future plans
- [x] Add Tic Tac Toe game
- [x] Add Snake game
- [x] Deploy whole page
- [ ] Add backend
    - [ ] Setup PostgreSQL
    - [ ] Write backend functions
    - [ ] Setup server hosting
    - [ ] Deploy backend
- [ ] Possibly rewrite in Next.js

## Supporting

You can support us [here](https://www.buymeacoffee.com/smarterfuture)
