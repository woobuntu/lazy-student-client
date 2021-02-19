import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Article.css";
import { isAuth, getCookie } from "../utils/auth";
import config from "../config";

function Article({ location }) {
  const { url, title, author, date, content } = location.state;
  const where = location.state.class;
  const token = getCookie("token");
  const [posted, setPosted] = useState(false);
  const [pid, setPid] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const postTitle = e.target.elements[0].value;
    const postContent = e.target.elements[1].value;

    if (!postTitle || !postContent) {
      alert("제목과 내용을 모두 입력해주세요!");
    }

    if (!posted) {
      try {
        const result = await axios({
          method: "post",
          url: `${config.REACT_APP_API}/news/post`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            articleUrl: url,
            postTitle,
            postContent,
          },
        });
        setPosted(true);
        setPid(result.data.data[0].postid);
        alert("goodjob!");
      } catch (apiError) {
        alert(apiError);
      }
    } else {
      let postId;
      if (location.state.postid) {
        postId = location.state.postid;
      } else {
        postId = pid;
      }
      try {
        const result = await axios({
          method: "post",
          url: `${config.REACT_APP_API}/news/update-post`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            postId,
            postTitle,
            postContent,
          },
        });
        console.log(result);
        setPosted(true);
        alert("goodjob!");
      } catch (apiError) {
        alert(apiError);
      }
    }
  };

  useEffect(() => {
    if (location.state.userid) {
      setPosted(true);
    }
  }, []);
  return (
    <div className="article_body">
      <div className="article_laptop">
        <div className="article_laptop_left">
          <div className="article_laptop_left_title">
            <p>{title}</p>
          </div>
          <div className="article_laptop_left_top">
            <div>{date}</div>
            <div className="article_top_class">{where}</div>
            <div>{author}</div>
          </div>
          <div className="article_laptop_left_content">
            {content.map((element, index) => (
              <div key={index} className="article_content_individual">
                &nbsp;&nbsp;{element}
              </div>
            ))}
          </div>
          <div className="article_original">
            <a href={url}>뉴스 원문 링크</a>
          </div>
        </div>
        <div className="article_laptop_right">
          {isAuth() && (
            <form className="article_post" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder={"제목"}
                defaultValue={location.state.posttitle}
              ></input>
              <textarea
                placeholder="내용"
                defaultValue={location.state.postcontent}
              ></textarea>
              <button>{!posted ? "저장하기" : "수정하기"}</button>
            </form>
          )}
          {!isAuth() && (
            <div className="article_not_logined">
              <div>
                <a
                  href={`https://kauth.kakao.com/oauth/authorize?client_id=${config.REACT_APP_KAKAO}&redirect_uri=${config.REACT_APP_REDIRECT}&response_type=code`}
                >
                  <img
                    src={require("../assets/kakao-login.png")}
                    alt="kakao-login"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="article_mobile">
        <div className="article_title">
          <p>{title}</p>
        </div>
        <div className="article_top">
          <div>{date.slice(5)}</div>
          <div className="article_top_class">{where}</div>
          <div>{author.slice(0, 4)}</div>
        </div>
        <div className="article_content">
          {content.map((element, index) => (
            <div key={index} className="article_content_individual">
              &nbsp;{element}
            </div>
          ))}
        </div>
        <a className="article_original" href={url}>
          뉴스 원문 링크
        </a>
        {isAuth() && (
          <div className="my_opinion">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="제목"
                defaultValue={location.state.posttitle}
              ></input>
              <textarea
                placeholder="내용"
                defaultValue={location.state.postcontent}
              ></textarea>
              <button>{!posted ? "저장하기" : "수정하기"}</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;
