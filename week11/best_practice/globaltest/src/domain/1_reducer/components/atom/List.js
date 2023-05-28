// dispatch(은행원)을 통해 사용자의 정보를 저장해서 은행원이 버튼누르게 해주자 
// 리듀서를 통해 새롭게 만들어서 반환 된 useReducer의 상태를 사용해야 입력값이 반영된 배열을 돌릴 수 있음 

//payload는 객체 형태로 전달해야한다. 
//state는 객체를 품은 배열이라 페이로드로 전달하지못한다. 
//ingredient가 보내지는 이유 state를 순회하는 각 요소 : 즉 객체 
const ReducerQ1List = ({state, dispatch }) => {
  return (
    <tbody>
      {state.map((ingredient) => (
        <tr  key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => { dispatch({type: 'DELTE', payload: ingredient }) }}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
