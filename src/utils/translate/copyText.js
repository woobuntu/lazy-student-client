const copyText = textToCopy => {
  const content = textToCopy.current.innerText;
  const temp = document.createElement('textarea');
  temp.value = content;

  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
};

export default copyText;
