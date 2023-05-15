import { useEffect, useState } from 'react';
import Q3components from '../../components/1.basic/q3components';

function Q3() {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  let id;
  useEffect(() => {
    // !isRunning && setCount(0);
    if (isRunning) {
      id = setInterval(() => setCount((prevCount) => prevCount + 1), 1000);
      console.log('마운트');
      console.log(count);
    }
    return () => {
      setCount(0);
      clearInterval(id);
      console.log('언마운트');
      console.log(count);
    };
  }, [isRunning]);
  return (
    <>
      <h1>문제3</h1>
      <div>
        {isRunning ? (
          <>
            <p> 줄넘기 횟수 : {count} </p> <Q3components />
          </>
        ) : null}
        <p>
          <button onClick={() => setIsRunning(true)}>줄넘기 시작</button>
        </p>
        <p>
          <button
            onClick={() => {
              setIsRunning(false);
            }}
          >
            줄넘기 중지
          </button>
        </p>
      </div>
    </>
  );
}
export default Q3;
