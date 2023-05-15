import { useState } from 'react';
import PlayListMock from '../../__mock__/playList.json';

function State1() {
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  const [makeSong, SetMakeSong] = useState({
    title: '',
    signer: '',
  });
  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {playList.map((prev) => {
          return (
            <li>
              <h3>{prev.title}</h3>
              <p>{prev.signer}</p>
              <button
                onClick={() => {
                  setPlayList((list) =>
                    list.filter((deleteTarget) => deleteTarget.title !== prev.title)
                  );
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <p>
          곡명 :{' '}
          <input
            onChange={(e) => {
              SetMakeSong((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </p>
        <p>
          가수/작곡 :{' '}
          <input
            onChange={(e) => {
              SetMakeSong((prev) => ({ ...prev, signer: e.target.value }));
            }}
          />
        </p>
        <p>
          <button
            onClick={() => {
              setPlayList((prev) => [...prev, makeSong]);
            }}
          >
            추가
          </button>
        </p>
      </div>
    </>
  );
}
export default State1;
