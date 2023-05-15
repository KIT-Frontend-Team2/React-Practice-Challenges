import { useRef, useState } from 'react';

function Q2() {
  const arr = [];
  const CopyArr = useRef();
  const [forceRender, setForceRender] = useState(false);
  const [hide, setHide] = useState(true);
  const List = useRef(arr);
  const [input, setInput] = useState('');
  const isSubmit = useRef(false);
  const onAddList = () => {
    if (input === '') return;
    setForceRender((prev) => !prev);
    if (isSubmit.current === false) {
      List.current.push(input);
      isSubmit.current = true;
    }
    setHide(true);
  };

  const ChgInput = (e) => {
    setInput(e.target.value);
  };

  const submitBtn = () => {
    CopyArr.current = [...List.current];
    setHide(false);
    isSubmit.current = false;
  };
  const chgColor = useRef(null);
  const textColor = () => {
    if (chgColor.current.style.color === 'red') {
      chgColor.current.style.color = 'black';
    } else {
      chgColor.current.style.color = 'red';
    }
  };
  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input
            onChange={(e) => {
              ChgInput(e);
            }}
          />
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={submitBtn}>제출</button>
        </p>
        {CopyArr.current === undefined || CopyArr.current.length === 0 ? (
          <div>제출할 목록이 없습니다</div>
        ) : (
          CopyArr.current.map((v) => {
            return <div>{v}</div>;
          })
        )}
        {/* 추가 버튼 눌렀을 때 하나만 추가 */}
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={chgColor}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button
          onClick={() => {
            textColor();
          }}
        >
          변경
        </button>
      </div>
    </>
  );
}
export default Q2;
