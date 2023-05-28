import React, { useReducer, useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";
import reducer from "../../../../store/1_reducer";

const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

  const [ingredients, setIngredients] = useState([
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ]);

  // ingredients 초기값 
  // reducer : 상태 업데이트 로직 
  // dispatch : 은행원(디스패치) 리듀서에게 액션(처리요청과 정보)을 전달한다. 
  // state : reducer를 통해 반환된 결과값 
  // dispatch가 전달해야할 기능과 정보는 어디에 ? : 추가, 삭제,input 


  const [state, dispatch] = useReducer(reducer, ingredients)

  console.log(state);
  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List ingredients={ingredients} state={state} dispatch={dispatch}/>
      </table>
      <Q1Form onSubmit={"onSubmit"}  dispatch={dispatch} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;
