function MyInfo() {
  return (
    <section id="about">
      <div>
        <h1>Park Jeonghwan</h1>
        <h3>WEB Developer (Frontend/Backend)</h3>
        <hr />
        <h1>I N T R O</h1>
        {/* <a href="{{site.url}}{{site.baseurl}}/#about">Read More</a> */}
      </div>
      <div className="image">
        <img
          src="https://avatars.githubusercontent.com/u/65170244?v=4"
          alt="Park Jeonghwan"
        />
      </div>
      <div>
        <div className="custom-myinfo-title">
          <p>
            <b>안녕하세요. INTFJ 박정환입니다.</b> (2012.11 ~ 현재)
          </p>
          <p>Frontend 근 3년 / Backend 9년</p>
        </div>
        <hr style={{ backgroundColor: "rgba(97, 97, 97, 0.3)" }} />
        <div className="custom-myinfo">
          <p>현재는 Frontend를 주로 합니다.</p>
          <p>MBTI는 INTJ와 INFJ의 비율이 비슷하여 INTFJ로 활동하고 있습니다.</p>
          <br />
          <p>Frontend Framework 중에서는 React를 주로 다루며,</p>
          <p>
            material-ui, react-query, react-hookform, yup 등의 보조 라이브러리
            조합 구성을 사용했습니다.
          </p>
          <p>그 결과 react-query과 yup에 능숙해지게 되었습니다.</p>
          <br />
          <p>Backend 경력이 사실 더 많으나,</p>
          <p>
            화면에서 바로 퍼포먼스를 확인할 수 있는 Frontend를 더 좋아하는
            편입니다.
          </p>
          <p>좋아하고, 앞으로 더 잘하고 싶습니다.</p>
        </div>
        <hr style={{ backgroundColor: "rgba(97, 97, 97, 0.3)" }} />
        <div className="custom-myhistory">
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
                  <p className="company">
                    <i>Procuratio</i>
                  </p>
                  <p className="subtext">프로큐라티오</p>
                </td>
                <td>
                  <p>[2023.04 ~ 2024.01]</p>
                  <p className="subtext">10개월</p>
                </td>
                <td>
                  <p>
                    <b>JavaScript</b> (React)
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="company">
                    <i>Hecto Innovation(Minwise)</i>
                  </p>
                  <p className="subtext">헥토이노베이션(민앤지)</p>
                </td>
                <td>
                  <p>[2017.01 ~ 2022.04]</p>
                  <p className="subtext">5년 4개월</p>
                </td>
                <td>
                  <p>
                    <b>Java</b> (SpringBoot, JSP)
                  </p>
                  <p>
                    <b>JavaScript</b> (React, VUE)
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="company">
                    <i>Jsoft Technology</i>
                  </p>
                  <p className="subtext">제이소프트테크놀로지</p>
                </td>
                <td>
                  <p>[2012.11 ~ 2017.01]</p>
                  <p className="subtext">4년 3개월</p>
                </td>
                <td>
                  <p>
                    <b>Java</b> (Spring, JSP)
                  </p>
                  <p>
                    <b>.Net</b> (ASP.net)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <hr style={{ backgroundColor: "rgba(97, 97, 97, 0.3)" }} />
              <div style={{ alignItems: "center" }}>
                <div>
                  <a href="{{site.url}}{{site.baseurl}}/project">
                    <p style={{ marginRight: "12px" }}>Projects</p>
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
                <div>
                  <p>▷ Projects 목록으로 이동합니다.</p>
                </div>
              </div> */}
      </div>
    </section>
  );
}

export default MyInfo;
