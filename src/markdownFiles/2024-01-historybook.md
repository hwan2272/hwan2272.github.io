---
{"codeKey": "historybook_202401"},
{"title": "HistoryBook : 개인 포트폴리오 사이트"},
{"layout": "post"},
{"imageLink": "https://github.com/hwan2272/hwan2272/assets/65170244/eb9acb67-9892-40d6-84c5-ea050e7fb034"},
{"tags": "PROJECT/개인"},
{"period": "2024.01"},
{"description": "HistoryBook : 개인 포트폴리오 사이트"},
# {"serviceToNumber": "12개"},
# {"unit": "프로젝트 항목"},
---

### 설명

- 포트폴리오 사이트 직접 제작 - 나만의 포트폴리오를 갖고 싶어서 직접 퍼블리싱 포함 개발

### 기간

- [2024.01] (ING)

### 인원 및 기여도

- 개인 프로젝트 (1인)
- 기여도 : **100%**

### 기술 스택

- React + vite + typescript
- React 18및 관련 라이브러리 (Material-UI, react-markdown, vitest)

### 구현

- **HTML5 태그 (header, nav, section, footer) 사용한 문단 구분** - HTML5의 태그를 알고 있으며 영역 구분에 사용할 수 있습니다.
- **App.css와 Section별 css(stacks.css 등..) 사용하여 각 항목별 디자인** - css를 분리하여 디자인하며 class의 명명규칙(css에 필요한 class이면 kebabCase처리 (ex) section-title)을 지킵니다.
- **Material-UI를 사용한 제목(Typography), 영역(Box) 처리** - MUI를 활용할 줄 알며 현재는 제목과 영역에 대한 inline 스타일처리를 하였지만, 공통 관리 방안에 대해 고민 중에 있습니다.
- **React-markdown을 사용하여 내부 MD파일 내용으로 PROJECTS 단의 화면 구성** - Project 항목을 MD파일 내용으로 적용해보고 싶었고, 알아보니 React진영에서는 MD파일에 최적화된 React-markdown을 사용하는 경향이 강하여 적용해보았습니다.
- **Vite build로 인한 빠른 build, Vitest 라이브러리를 사용한 테스트코드 작성 시도** - 기존에 사용하던 Webpack빌드뿐만 아니라 vite의 빌드 속도를 적용해보고자 사용하였습니다. vite에 맞춰진 vitest라이브러리를 도입하여 jest와의 연계와 테스트 코드 작성을 시도해보았습니다.
- **Github Action 적용을 통한, 소스 push에 따른 자동 CI/CD** - 개인 Github의 Github Action 설정을 하여 로컬에서 서버로 push하면 자동 배포되도록 설정을 적용하였습니다.

### 결과물 및 링크

- [Portfolio PC URL](https://hwan2272.github.io/)
- [Github URL](https://github.com/hwan2272/hwan2272.github.io)

---
