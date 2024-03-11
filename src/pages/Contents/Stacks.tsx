import { Box, Typography } from "@mui/material";
import "../../css/Contents/Stacks.css";

function Stacks() {
  return (
    <Box className="section-container">
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "dimgray",
            fontFamily: "'SBAggroB', sans-serif",
            fontSize: "23pt",
          }}
        >
          SKILL & STACKS
        </Typography>
      </Box>
      <hr className="divider" />
      <Box>
        <Box className="stacks-pane">
          <Box sx={{ mb: 1 }}>
            <Box
              sx={{
                border: "2px groove #E2BFB3",
                backgroundColor: "whitesmoke",
                borderRadius: 2,
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  color: "dimgray",
                  fontFamily: "'SBAggroB', sans-serif",
                  fontSize: "20pt",
                  mb: 1,
                }}
              >
                주요 Skills
              </Typography>
              <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
              <ul>
                <li>
                  React.js로 환경 설정과 프론트엔드 개발에 필요한 전반적인
                  활동을 할 수 있습니다. (실제로 상용 오픈한 서비스도 많이
                  있습니다.)
                </li>
                <li>
                  개발 도중 npm 이나 yarn에서 제공하는 React.js 관련
                  라이브러리들을 사용할 수 있습니다. (react-query,
                  react-hookform, yup)
                </li>
                <li>상태관리를 위한 Zustand, Redux 등을 사용할 수 있습니다.</li>
              </ul>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <ul>
                <li>HTML과 CSS를 다루어 웹페이지 제작을 할 수 있습니다.</li>
                <li>
                  Figma를 사용한 협의는 해본 적은 없습니다. 하지만 디자인 직군과
                  업무 협의한 경험이 많기 때문에 어렵지 않게 가능할 것으로
                  생각합니다.
                </li>
                <li>
                  퍼블리싱은 교육을 수료하였고 미숙할수 있지만 기본적인 것은
                  어느정도 할 수 있습니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
              <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
              <ul>
                <li>
                  Javascript에 능숙합니다. ES6 문법에 익숙합니다. (spread 연산자
                  등)
                </li>
                <li>
                  Typescript는 개발을 하며 접한 경험이 있어 100% 다루어 본적은
                  없지만 잘 사용할 수 있을 것으로 생각합니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
              <img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white" />
              <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white" />
              <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" />
              <ul>
                <li>
                  Java Spring의 MVC 구조에 능숙합니다. JSP개발 경험이 많아
                  Jquery를 잘 다루었습니다.
                </li>
                <li>프론트엔드를 하며 Jquery는 지양하고 있습니다.</li>
                <li>SpringBoot로 API 서버 정도는 작성할 수 있습니다.</li>
              </ul>
              <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
              <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white" />
              <img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" />
              <ul>
                <li>MySql, MariaDB, Oracle 모두 다룰 수 있습니다.</li>
                <li>
                  SpringBoot로 간단한 서버를 만들시, MariaDB를 주로 사용합니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" />
              <img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white" />
              <ul>
                <li>Linux 환경에 익숙하여 Apache세팅 등이 가능합니다.</li>
                <li>
                  SpringBoot으로 서버를 빌드하여 Apache tomcat으로 구동할 수
                  있습니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
              <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" />
              <ul>
                <li>Git, Jira를 협업 툴로 많이 사용하였습니다.</li>
                <li>Git로 소스 fetch, pull 및 branch 작업에 익숙합니다.</li>
              </ul>
              <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
              <ul>
                <li>VSCode를 주로 프론트엔드 개발시 사용합니다.</li>
              </ul>
              <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
              <ul>
                <li>JWT의 프로세스에 익숙합니다. (Token, RefreshToken)</li>
              </ul>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                border: "2px groove #E2BFB3",
                backgroundColor: "whitesmoke",
                borderRadius: 2,
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  color: "dimgray",
                  fontFamily: "'SBAggroB', sans-serif",
                  fontSize: "20pt",
                  mb: 1,
                }}
              >
                기타 Skills
              </Typography>
              <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" />
              <ul>
                <li>
                  Vue로 개발을 진행한 적이 있습니다. 단기간이어서 완전히
                  익숙하진 않습니다.
                </li>
              </ul>
              {/* <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /> */}
              <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" />
              <ul>
                <li>
                  SpringBoot 개발시, Swagger를 사용하여 API 스펙을 공유한 적이
                  있습니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white" />
              <ul>
                <li>
                  SpringBoot 개발시 SpringSecurity를 통해 계층구조를 만들고
                  role을 관리하였습니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white" />
              <ul>
                <li>
                  Eclipse를 주로 Spring 및 SpringBoot 개발에 사용했었습니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
              <ul>
                <li>
                  BootStrap UI 테마 중 하나인 Concept-master를 활용하여 Admin
                  Backoffice를 개발한 적이 있습니다.
                </li>
              </ul>
              <img src="https://img.shields.io/badge/Junit5-25A162?style=for-the-badge&logo=junit5&logoColor=white" />
              <img src="https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=for-the-badge&logo=rabbitmq&logoColor=white" />
              <img src="https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white" />
              <img src="https://img.shields.io/badge/Prometheus-000000?style=for-the-badge&logo=prometheus&labelColor=000000" />
              <img src="https://img.shields.io/badge/Grafana-F2F4F9?style=for-the-badge&logo=grafana&logoColor=orange&labelColor=F2F4F9" />
              <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
              <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
              <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
              <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" />
              <img src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" />
              <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" />
              <ul>
                <li>
                  이들 모두를 알고는 있으며 한두번 사용해본 정도입니다. 능숙하진
                  못합니다.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Stacks;
