import { useRef, useState } from 'react';

function Q2() {
  const [forceRender, setForceRender] = useState(false);
  const [input, setInput] = useState('');
  const [hide, setHide] = useState(true);
  const isSubmit = useRef(false);
  const changRef = useRef();
  // 추가가 됐는지 확인해주는 용도
  const SubmitList = useRef();
  // 제출된 리스트
  const List = useRef(arr);
  // 제출이 안된 리스트
  const arr = [];
  const randomColor = () => {
    return Math.floor(Math.random() * 255);
  };
  // const [hide,setHide] = useState(true) 제출버튼 눌렀을 때, 안눌렀을 때 useRef에서 제출된 리스트를 보여줄지 제출이 안된 리스트를 보여줄지

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
    SubmitList.current = [...List.current];
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
          {/*
            {hide ? (CopyArr.current===undefined ? null:CopyArr.current.map((v)=> {return <div>{v}</div>})):
            List.current.length ===0 ? <div>제출할 목록이 없습니다</div>:
            List.current.map((v)=>{return <div>{v}</div>})}
          */}
          {/* 제출 버튼을 처음 눌렀을 때 추가된 리스트가 있음에도 추가되지 않음을 해결하였습니다. */}
        </p>
        {SubmitList.current === undefined || SubmitList.current.length === 0 ? (
          <div>제출할 목록이 없습니다</div>
        ) : (
          SubmitList.current.map((v) => {
            return <div>{v}</div>;
          })
        )}
        {/* 추가 버튼 눌렀을 때 하나만 추가 */}
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={changRef}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button
          onClick={() => {
            changRef.current.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
          }}
        >
          변경
        </button>
      </div>
    </>
  );
}
export default Q2;
