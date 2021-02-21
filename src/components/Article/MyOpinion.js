import React from 'react';

const MyOpinion = ({ onSubmit, posttitle, postcontent, posted, device }) => {
  return (
    <div
      className={device === 'laptop' ? 'article_laptop_right' : 'my_opinion'}
    >
      <form
        className={device === 'laptop' && 'article_post'}
        onSubmit={onSubmit}
      >
        <input type='text' placeholder='제목' defaultValue={posttitle}></input>
        <textarea placeholder='내용' defaultValue={postcontent}></textarea>
        <button>{posted ? '수정하기' : '저장하기'}</button>
      </form>
    </div>
  );
};

export default MyOpinion;
