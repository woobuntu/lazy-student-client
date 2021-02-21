import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Article.css';
import { getCookie } from '../utils/auth';
import config from '../config';
import { ArticleMobile, ArticleLaptop } from '../components/Article';

function Article({ location: { state } }) {
  const url = state.url;
  const token = getCookie('token');
  const [posted, setPosted] = useState(false);
  const [pid, setPid] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    const postTitle = e.target.elements[0].value;
    const postContent = e.target.elements[1].value;

    if (!postTitle || !postContent) alert('제목과 내용을 모두 입력해주세요!');

    try {
      const {
        data: { data },
      } = await axios({
        method: 'post',
        url: `${config.REACT_APP_API}/news/${posted ? 'update-post' : 'post'}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: posted
          ? {
              postId: state.postId ? state.postId : pid,
              postTitle,
              postContent,
            }
          : {
              articleUrl: url,
              postTitle,
              postContent,
            },
      });
      setPosted(true);
      !posted && setPid(data[0].postid);
      alert('goodjob!');
    } catch (apiError) {
      alert(apiError);
    }
  };

  useEffect(() => {
    if (state.userid) setPosted(true);
  }, [state.userid]);

  return (
    <div className='article_body'>
      <ArticleLaptop state={state} posted={posted} onSubmit={onSubmit} />
      <ArticleMobile state={state} posted={posted} onSubmit={onSubmit} />
    </div>
  );
}

export default Article;
