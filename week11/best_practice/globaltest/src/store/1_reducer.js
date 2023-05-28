// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {id: 1, name: '피자 도우', price: 1000}
// 1 :  {id: 2, name: '토마토 소스', price: 500}
// 2 : {id: 3, name: '치즈', price: 1000}
// 3: {id: 4, name: '피망', price: 500}
// 4: {id: 5, name: '양파', price: 500}


// action 
// {type: 'ADD_LIST', payload: {…}}
// payload:  {name: 'dsf', price: '435'}




const reducer = (state, action) => {
  console.log(state,action)
  switch(action.type) {
    case 'ADD_LIST':
      const newArr2 ={
        id: Math.random() * 100000,
        name: action.payload.name,
        price: action.payload.price,
      }
      return [
        ...state, // 스테이트를 복사 
        newArr2
      ]
      //복사된 1~ 4까지의 state+ 새로운객체 가 담긴 후 반환 
    case 'DELTE':
      return state.filter((item) =>  item.id !== action.payload.id)
    default : 
    return state
};
}
export default reducer;