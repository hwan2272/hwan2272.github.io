import { Box, Typography } from "@mui/material";
import "../../css/Contents/MyInfo.css";

function MyInfo() {
  return (
    <Box className="section-container">
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#efc443",
            fontFamily: "'SBAggroB', sans-serif",
            fontSize: "23pt",
          }}
        >
          INTRODUCE
        </Typography>
      </Box>
      <hr className="divider" />
      <Box>
        <Box className="myinfo-image">
          <img
            src="https://avatars.githubusercontent.com/u/65170244?v=4"
            alt="Park Jeonghwan"
          />
        </Box>
        <Box className="myinfo-title-pane">
          <Typography>
            안녕하세요. 학습과 노력의 개발자 hwan2272 박정환입니다.
          </Typography>
        </Box>
        <hr className="divider" />
        <Box className="myinfo-pane">
          <Typography>
            세줄소개 드립니다.
            <br />
            1. 회사의 모든 기술을 흡수하고 싶다는 생각으로 평균 3년 반 동안 재직했습니다.
            <br />
            2. 나의 일 뿐만이 아닌, 타인의 일 또한 이해하며 협업에 노력한 결과 많은 성과를 거두었습니다.
            <br />
            3. 이렇듯 '인내와 끈기', '학습과 노력'으로 계속해서 발전할 수 있다고 생각합니다. 감사합니다.
          </Typography>
        </Box>
        <hr className="divider" />
        <Box className="myhistory-pane">
          <table>
            {/* <title>주요 재직이력(최근 순)</title> */}
            <thead></thead>
            <colgroup>
              <col width="35%" />
              <col width="30%" />
              <col width="35%" />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <Typography className="company">
                    <i>Procuratio</i>
                  </Typography>
                  <Typography className="subtext">프로큐라티오</Typography>
                </td>
                <td>
                  <Typography>[2023.04 ~ 2024.01]</Typography>
                  <Typography className="subtext">10개월</Typography>
                </td>
                <td>
                  <Typography>JavaScript (React)</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography className="company">
                    <i>Hecto Innovation(Minwise)</i>
                  </Typography>
                  <Typography className="subtext">
                    헥토이노베이션(민앤지)
                  </Typography>
                </td>
                <td>
                  <Typography>[2017.01 ~ 2022.04]</Typography>
                  <Typography className="subtext">5년 4개월</Typography>
                </td>
                <td>
                  <Typography>Java (SpringBoot, JSP)</Typography>
                  <Typography>JavaScript (React, VUE)</Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography className="company">
                    <i>Jsoft Technology</i>
                  </Typography>
                  <Typography className="subtext">
                    제이소프트테크놀로지
                  </Typography>
                </td>
                <td>
                  <Typography>[2012.11 ~ 2017.01]</Typography>
                  <Typography className="subtext">4년 3개월</Typography>
                </td>
                <td>
                  <Typography>Java (Spring, JSP)</Typography>
                  <Typography>.Net (ASP.net)</Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
}

export default MyInfo;
