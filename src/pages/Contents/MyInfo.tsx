import { Box, Typography } from "@mui/material";
import "../../css/Contents/MyInfo.css";

function MyInfo() {
  return (
    <section className="myInfoSection" id="about">
      <Box className="section-container">
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#efc443",
              fontFamily: "'SBAggroB', sans-serif",
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
              <b>안녕하세요. INTFJ 박정환입니다.</b>
            </Typography>
            <Typography>
              개발경력은 Frontend 근 3년 / Backend 9년 정도 됩니다.
            </Typography>
          </Box>
          <hr className="divider" />
          <Box className="myinfo-pane">
            <Typography>현재는 Frontend를 주로 합니다.</Typography>
            <Typography>
              MBTI는 INTJ와 INFJ의 비율이 비슷하여 INTFJ로 활동하고 있습니다.
            </Typography>
            <br />
            <Typography>
              Frontend Framework 중에서는 React를 주로 다루며,
            </Typography>
            <Typography>
              material-ui, react-query, react-hookform, yup 등의 보조 라이브러리
              조합 구성을 사용했습니다.
            </Typography>
            <Typography>
              그 결과 react-query과 yup에 능숙해지게 되었습니다.
            </Typography>
            <br />
            <Typography>Backend 경력이 사실 더 많으나,</Typography>
            <Typography>
              화면에서 바로 퍼포먼스를 확인할 수 있는 Frontend를 더 좋아하는
              편입니다.
            </Typography>
            <Typography>좋아하고, 앞으로 더 잘하고 싶습니다.</Typography>
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
                    <Typography>
                      <b>JavaScript</b> (React)
                    </Typography>
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
                    <Typography>
                      <b>Java</b> (SpringBoot, JSP)
                    </Typography>
                    <Typography>
                      <b>JavaScript</b> (React, VUE)
                    </Typography>
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
                    <Typography>
                      <b>Java</b> (Spring, JSP)
                    </Typography>
                    <Typography>
                      <b>.Net</b> (ASP.net)
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default MyInfo;
