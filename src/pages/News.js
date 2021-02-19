import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { Kakao, KAKAO_APP_KEY } from "../utils/kakao";
import "../css/News.css";
import config from "../config";
import axios from "axios";
import { authenticate, isAuth, signOut, getCookie } from "../utils/auth";

Kakao.init(KAKAO_APP_KEY);

function News({ history }) {
  const [state, setState] = useState([]);
  const [arrayOfJ, setArrayOfJ] = useState([]);
  const [arrayOfC, setArrayOfC] = useState([]);
  const [arrayOfF, setArrayOfF] = useState([]);

  //카카오 로그인 함수
  const login = async (data) => {
    let result1;
    try {
      result1 = await axios({
        url: `https://kauth.kakao.com/oauth/token`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data,
      });
    } catch (kakaoError) {
      return alert(
        `카카오서버로부터 액세스 토큰을 받는데 실패했습니다, ${kakaoError}`
      );
    }
    const { access_token } = result1.data;

    let result2;
    try {
      result2 = await axios({
        url: `${config.REACT_APP_API}/auth`,
        method: "POST",
        data: {
          KAKAO_TOKEN: access_token,
        },
      });
      authenticate(result2);
      if (isAuth()) {
        history.push("/news");
        getNewsList();
      }
    } catch (apiError) {
      return alert(
        `lazy-student서버로부터 유저 정보를 받아오는데 실패했습니다.`
      );
    }
  };

  const getNewsList = async () => {
    const token = getCookie("token");
    let axiosConfig;
    if (isAuth()) {
      axiosConfig = {
        method: "get",
        url: `${config.REACT_APP_API}/news/logined`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      axiosConfig = { method: "get", url: `${config.REACT_APP_API}/news` };
    }
    let lists;
    try {
      lists = await axios(axiosConfig);
    } catch (apiError) {
      alert(apiError);
    }
    const articles = lists.data.data;
    let J = [];
    let C = [];
    let F = [];
    articles.forEach((element) => {
      if (element.class === "만물상") {
        C.push(element);
      }
      if (element.class === "분수대") {
        J.push(element);
      }
      if (element.class === "fn스트리트") {
        F.push(element);
      }
    });
    setState(articles);
    setArrayOfC(C);
    setArrayOfJ(J);
    setArrayOfF(F);
  };

  useEffect(() => {
    const code = queryString.parse(history.location.search).code;
    const data = queryString.stringify({
      grant_type: "authorization_code",
      client_id: config.REACT_APP_KAKAO,
      redirect_uri: config.REACT_APP_REDIRECT,
      code,
    });
    if (code && !isAuth()) {
      login(data);
    }
    Kakao.Channel.createAddChannelButton({
      container: "#kakao-add-channel-button",
      channelPublicId: "_yfzwxb",
      size: "large",
    });

    getNewsList();

    return () => {
      console.log("뒷정리");
    };
  }, []);

  const kakaoLogout = async () => {
    // await Kakao.Auth.logout();
    signOut();
    getNewsList();
    // history.push("/news");
  };

  return (
    <div className="news_body">
      <div className="news_top">
        <div className="blank"></div>
        <h1>Lazy-News</h1>
        <div className="blank">
          {isAuth() && (
            <Link className="mypage" to="/mypage">
              <i class="far fa-user"></i>
            </Link>
          )}
        </div>
      </div>
      <div className="news_middle_mobile">
        {state.map((element, index) => (
          <Link
            className="news_link"
            key={index}
            to={{ pathname: "/article", state: element }}
          >
            <div
              className={
                !element.userid
                  ? "news_middle_mobile_record"
                  : "news_middle_mobile_record_line"
              }
            >
              <div className="news_middle_mobile_record_date">
                <p>{element.date.slice(5)}</p>
              </div>
              <div className="news_middle_mobile_record_class">
                <p>{element.class}</p>
              </div>
              <div className="news_middle_mobile_record_title">
                <p>{element.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="news_middle_laptop">
        <div className="news_middle_laptop_class">
          <p className="news_middle_laptop_class_paragraph">분수대</p>
          <div className="news_middle_laptop_class_overflow">
            {arrayOfC.map((element, index) => (
              <Link
                key={index}
                className="news_link"
                to={{ pathname: "/article", state: element }}
              >
                <div
                  className={
                    !element.userid
                      ? "news_middle_laptop_record"
                      : "news_middle_laptop_record_line"
                  }
                >
                  <div className="news_middle_laptop_record_date">
                    <p>{element.date.slice(5)}</p>
                  </div>
                  <div className="news_middle_laptop_record_author">
                    <p>{element.author.slice(0, 4)}</p>
                  </div>
                  <div className="news_middle_laptop_record_title">
                    <p>{element.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="news_middle_laptop_class">
          <p className="news_middle_laptop_class_paragraph">만물상</p>
          <div className="news_middle_laptop_class_overflow">
            {arrayOfJ.map((element, index) => (
              <Link
                key={index}
                className="news_link"
                to={{ pathname: "/article", state: element }}
              >
                <div
                  className={
                    !element.userid
                      ? "news_middle_laptop_record"
                      : "news_middle_laptop_record_line"
                  }
                >
                  <div className="news_middle_laptop_record_date">
                    <p>{element.date.slice(5)}</p>
                  </div>
                  <div className="news_middle_laptop_record_author">
                    <p>{element.author.slice(0, 4)}</p>
                  </div>
                  <div className="news_middle_laptop_record_title">
                    <p>{element.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="news_middle_laptop_class">
          <p className="news_middle_laptop_class_paragraph">fn스트리트</p>
          <div className="news_middle_laptop_class_overflow">
            {arrayOfF.map((element, index) => (
              <Link
                key={index}
                className="news_link"
                to={{ pathname: "/article", state: element }}
              >
                <div
                  className={
                    !element.userid
                      ? "news_middle_laptop_record"
                      : "news_middle_laptop_record_line"
                  }
                >
                  <div className="news_middle_laptop_record_date">
                    <p>{element.date.slice(5)}</p>
                  </div>
                  <div className="news_middle_laptop_record_author">
                    <p>{element.author.slice(0, 4)}</p>
                  </div>
                  <div className="news_middle_laptop_record_title">
                    <p>{element.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="news_bottom_buttons">
        <div id="kakao-add-channel-button"></div>
        {isAuth() ? (
          <div className="news_logout" onClick={kakaoLogout}>
            <p>카카오 로그아웃</p>
          </div>
        ) : (
          <a
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${config.REACT_APP_KAKAO}&redirect_uri=${config.REACT_APP_REDIRECT}&response_type=code`}
          >
            <img src={require("../assets/kakao-login.png")} alt="kakao-login" />
          </a>
        )}
      </div>
    </div>
  );
}

export default News;
