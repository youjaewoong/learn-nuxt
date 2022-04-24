# learn-nuxt

인프런의 Nuxt.js 시작하기 강의 리포지토리입니다.

## 개발 환경 구성

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Node.js](https://nodejs.org/ko/)

## VSCode 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 뷰 확장 플러그인 : [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- 뷰 코드 스니펫 : [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- 문법 검사 : [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [ES6 String HTML](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타
  - [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등

## 개발 목록
- 목록
- 상세
- 장바구니 담기
- 장바구니 리스트


### SSR build
- nuxt.config.js 에서 아래 내용 주석
  //`target: 'static',
- heroku site에 build
  - https://dashboard.heroku.com/apps
  
- heroku github 연동 및 빌드
  - 해당 프로젝트 이동
  `heroku git:remote -a <app-name>`

  - 자동 build
  `git push heroku HEAD:master`

### SSG build
- nuxt.config.js 에서 아래 내용 추가
  `target: 'static',`  
- dist 파일 생성
  `npm run generate`

- https://www.netlify.com/ 접속 및 연동 작업

### api server
- https://my-json-server.typicode.com/youjaewoong/nuxt-shopping-api


### ssr url, ssg url
- ssr: https://dashboard.heroku.com/apps/nuxt-shopping-v1
- ssg: https://app.netlify.com/teams/youjaewoong/overview