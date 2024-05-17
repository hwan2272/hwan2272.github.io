# HistoryBook - 포트폴리오 사이트 (v.1)

## 개요

- 나만의 포트폴리오 사이트 (v.1)
- React + Vite + Typescript 구성
- React 18 및 관련 라이브러리 (React-markdown, Vitest)
- HTML5 시맨틱 태그 (header, nav, section, footer) 사용한 문단 구분
- App.css와 Section별 css(stacks.css 등..) 사용하여 항목별 디자인
- Material-UI 의 요소별 UI 참조
- React-markdown을 사용하여 내부 MD파일 내용으로 PROJECTS 단의 화면 구성
- Vite build로 인한 빠른 build
- Jest, Vitest 테스트코드 작성 시도
- Git Feature Branch Push후 Main Branch의 Github Merge 및 Github Actions를 통한 Github.io 자동 CI/CD
- https://hwan2272.github.io

## 사용한 라이브러리 및 폰트

```
react
vitest, jest, testing-library/react 및 관련 dependency
mui/material 및 관련 dependency
react-router-dom
yarn
md파일 read및 처리를 위한 react-markdown, remark-gfm, react-syntax-highlighter

S-coreDream 폰트
aggroB 폰트
Pretendard 폰트
네이버 나눔고딕 폰트
```

## 라이브러리 설치

```
npm install
```

## 동작 스크립트 (npm install 후 실행)

```
npm run dev
```

## 주요 폴더 및 리소스 구조 설명

```
 src
  ├──components - 서비스 내에서 쓰이는 공통 컴포넌트
  │   ├── ProjectCard.tsx - 프로젝트 섹션에서 쓰이는 Card 형 컴포넌트
  │   └── ProjectMdFileReader.tsx - 프로젝트 섹션에서 내장 MD파일의 정보를 불러오기 위한 컴포넌트
  │
  ├──css - 사이트 내에서 쓰이는 css
  │   ├── Contents - 사이트 메인 섹션들에서 사용하는 css 모음
  │   │     ├── Contacts.css - 연락처 섹션에서 사용하는 css
  │   │     ├── MyInfo.css - 자기소개 섹션에서 사용하는 css
  │   │     ├── Projects.css - 프로젝트 섹션에서 사용하는 css
  │   │     ├── Stacks.css - 기술 스킬/스택 섹션에서 사용하는 css
  │   │     └── Welcome.css - 첫화면 섹션에서 사용하는 css
  │   ├── App.css - 사이트 전반적으로 기본이 되는 css
  │   └── Reset.css - 브라우저별 설정되어있는 기본 css를 초기화시키기 위한 css
  │
  ├──markdownFiles - 프로젝트 섹션에서 사용하는 프로젝트 항목별 MD파일 모음 (내용생략)
  │
  ├──pages - 메인 컨텐츠 내 각 섹션
  │   ├── Contents - 사이트 메인 섹션들 모음
  │   │     ├── Contacts.tsx - 연락처 섹션
  │   │     ├── Contents.tsx - 메인 컨텐츠
  │   │     ├── MyInfo.tsx - 자기소개 섹션
  │   │     ├── Projects.tsx - 프로젝트 섹션
  │   │     ├── Stacks.tsx - 기술 스킬/스택 섹션
  │   │     ├── ToTopButton.tsx - 일정 스크롤 이하일시 위로 가기 위한 버튼
  │   │     └── Welcome.tsx - 첫화면 섹션
  │   ├── Footer.tsx - 사이트 푸터 정의
  │   ├── Header.tsx - 사이트 헤더 정의
  │   ├── LeftMenu.tsx - 사이트 LeftMenu 정의 (미 사용)
  │   └── Navigation.tsx - 사이트 nav정의 (탑메뉴)
  │
  └──test - 사이트 요소 테스트코드
      ├── Contents - 사이트 메인 섹션들 모음
      │     ├── Contacts.test.jsx - 연락처 섹션 테스트코드
      │     ├── MyInfo.test.jsx - 자기소개 섹션 테스트코드
      │     ├── Projects.test.jsx - 프로젝트 섹션 테스트코드
      │     └── Welcome.test.jsx - 첫화면 섹션 테스트코드
      └── App.test.jsx - 사이트 푸터 정의 테스트코드
```
