import { useState } from 'react';

const useResizeTextArea = () => {
  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });
  const resizeTextarea = (e) => {
    const { scrollHeight, clientHeight, value } = e.target;
    // console.log(scrollHeight, clientHeight);
    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }
    if (textareaHeight.lineBreak[value.length]) {
      //   console.log(textareaHeight.lineBreak, value.length);
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
    if (value.length === 0) {
      setTextareaHeight({ row: 0, lineBreak: {} });
    }
  };
  const onKeyEnter = (e) => {
    if (e.code === 'Enter') {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
      }));
    }
  };
  return { textareaHeight, resizeTextarea, onKeyEnter };
};

export default useResizeTextArea;
