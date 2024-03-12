---
{"codeKey": "hdmscamel_202304"},
{"title": "Hdms Camel : 임상연구 관리 통합플랫폼 HDMS 서비스 Camel버전"},
{"layout": "post"},
{"imageLink": "https://github.com/hwan2272/hwan2272/assets/65170244/605cc251-5362-403c-a5a1-e918c41ea5ad"},
{"tags": "PROJECT/현업"},
{"period": "2023.04 ~ 2024.01"},
{"description": "Hdms Camel : 임상연구사업 관리 통합플랫폼 HDMS 서비스 Camel버전"},
# {"serviceToNumber": "3건"},
# {"unit": "당시기준 Camel버전 상용오픈건"},
---

### (현업 프로젝트이므로 예시 화면 블러처리)

### 설명

- 임상연구사업 관리 통합플랫폼 HDMS 서비스의 Camel(C)버전
- 기존에 Alpaca(A), Buffalo(B) 등 레거시 서비스들이 존재하며, 점진적 개선을 위해 매년 상위 버전을 개발을 목적으로 하고 있음

### 기간

- [2023.04 ~ 2024.01] (10개월)

### 인원 및 기여도

- 현업 프로젝트 (기본 프론트엔드 개발 2인, 백엔드 개발 1인. 급박 일정시 +1인)
- 기여도 : **70%**

### 기술 스택

- React 18및 관련 라이브러리 (Material-UI, React-Query, React-Hookform, yup 외 다수)

### 업무

- **React.js 18 + Material-ui 및 React-hookform, yup validation, React-query 라이브러리의 각종 케이스 경험** - HDMS의 Camel버전은 MUI를 커스텀한 작은 단위의 컴포넌트들이 존재하고, 이를 화면별 성격에 맞게 사용하여 화면이 구성되는 형태를 가진 서비스입니다. 등록성 화면에서는 React-hookform으로 폼 형태로 구성이 되어 있으며 yup validation으로 유효성 검토를 하고, React-Query로 서버의 API가 사용됩니다. 이처럼 각 라이브러리들이 맞물려 돌아가는 각종 Case를 숙련하였습니다.
- **임상연구 도메인의 이해와 eCrf, PRO, Imaging, Safebox 구현** - 이 모두 서비스를 구성하는 큰 단위의 일종의 대메뉴입니다. PRO는 연구대상자의 설문을 통해 정보를 모으는 프로세스 및 방법이며, Imaging은 연구대상자의 MRI사진이나 영상정보를 단계별로 연구자들이 분석하는 프로세스입니다. 이 두가지에 대해서는 저보다 아는 사람이 적을 정도로 프로세스에 숙달을 하고 또한 유저의 사용이 쉽게 등록 화면들의 등록값 2~30여개를 과감하게 리팩토링 하여 최종적으로 등록에 5분이상 걸리던 화면을 1분이내로 단축하여 운영업무를 도우는 등 좋은 서비스 개발을 위해 힘썼습니다.
- **TinyMCE => SunEditor로 WebEditor 교체** - 기존 레거시 소스들은 웹에디터로 TinyMCE를 사용하는데, 이를 Camel에 적용하니 '허가되지 않은 도메인' 이라는 오류가 발생했습니다. 내부 회의 결과 대체 방안을 찾기로 결정되어 TinyMCE의 유료버전들을 검토했고 에디터 자체를 바꾸는 방안도 찾다 보니 React진영에서는 SunEditor가 유용하다고 판단하여 두개를 비교검토 끝에 SunEditor로 완전 대체하는 것으로 결정하였습니다. 공통 컴포넌트화 하여 사용을 해보니 운영팀 측에서도 결과 만족하여 서비스에 적용. 해결하였던 경험이 있습니다.

### 결과물 및 링크

- **당시기준 HDMS 서비스 Camel버전 솔루션 상용 오픈 3건**
- 현업 프로젝트이므로 전체 공유는 불가. 메인화면, 회원가입 확인가능
- [Hdms Camel PC URL (Main화면, 회원가입)](https://camel.dataservice.kr/)

---
