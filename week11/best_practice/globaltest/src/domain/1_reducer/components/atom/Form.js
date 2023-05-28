import { useState } from "react";

const Q1Form = ({dispatch}) => {
  const [userInput, setUerInput] = useState({
    name: '',
    price: ''
  });

  // 귀찮으니 변수 생성
  const {name, price} = userInput; // 해당생성한 변수는 상태를 담는 개별변수임으로 iput 태그에 사용할 수있다. 


  //사용자의 값을 받기 
  const onChange = (e) => {
    // onChamge의 경우 sumbit과 다르게 아래와 같은 방법으로 받아오지 못한다. 
    // const name = e.target.value;
    // const price = e.target.price.value;  
    console.log(e.target.name); 
    console.log(e.target.value);
    const {name,value} = e.target; // 매번 e.target 쓰기 귀찮을 떄 씁시다. // name : input의 name이름 , value input의 상태값 
    const newArr = {
      ...userInput,
      [name] : value // //e.target의 name과 value이다. 키와 벨류 짝궁 만들어서 새객체 만들기 
    }
    setUerInput(newArr)
    console.log(userInput)//
  }

// 폼의새로고침을막고
// 디스패치를 통해 사용자의 요구와 리듀서가 처리할 사용자 데이터를 보냄 
  const handleonClick =(e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_LIST', payload: userInput });
  }
  return (
    <form onSubmit={handleonClick}>
      <label>
        <input type="text" name="name" placeholder="재료" onChange={onChange} value={name}/>
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" onChange={onChange} value={price}/>
      </label>
      <button onClick={handleonClick}>추가</button>
    </form>
  );
};
export default Q1Form;
