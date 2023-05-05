## 📓 pair3) React-hook함수 예습, 정리

// 훅함수의 장점

// 1. useSTATE
// 장점 : 상태가 바뀔때마다 자동으로 재랜더링이 된다는 이점이 있어 상태관리에 용이하다
// 단점 : 만약 코드가 길어지는 상태라면 과도한 재랜더링이 단점으로 작용할 수 도 있다.

import React, { useState } from 'react';

export default function UseState() {
let count = 0;
const [useCount, setUseCount] = useState(0);
const increaseNumber = () => {
count++;
console.log(count)
}

    const increaseState = () => {
        setUseCount((prev) => prev +=1)
        console.log(useCount)
    }
    return (
        <div>
            UseState
            <div >
                count : {count}
            </div>
            <button onClick={increaseNumber}>increaseNumber</button>
            <div>
                countState : {useCount}
            </div>
            <button onClick={increaseState}>increaseState</button>
        </div>
    );

}

// 2. REF는 참조를 한다는것이다.
// 장점 : 무분별 재랜더링을 하지않고 내가 참조하고있는 상태의 값만

import React, { useRef, useState } from 'react';

export default function UseRef() {
console.log('렌더링되었습니다 😥')
const inputElem = useRef(null);
const [number, setNumber] = useState(0)
const [numberRef, setNumRef] = useState(0)
const onButtonClick = () => {
// current는 마운트된 input element를 가리킵니다.
inputElem.current.focus();
};

    return (
      <>
        <input ref={inputElem} type="text" />
        <button onClick={()=>{
            onButtonClick();
            setNumRef(inputElem.current.value)
        }}>Focus the input</button>
        <div>
        <input type='text' onChange={(e)=> setNumber(e.target.value)}/>
        </div>
        <div>
        <button onClick={()=>{console.clear()}}>콘솔 지우기</button>
        </div>

        <div>
          <div>useState: {number}</div>
          <div>useRef: {numberRef}</div>
        </div>
      </>
    );

}
import React, { useMemo, useState } from 'react';

export default function UseMemo() {
const [number, setNumber] = useState(0);
const [submitNumber, setSubmitNumber] = useState(0);
let new_number = 0;

    const result = useMemo(
        () => {
            const res = computeExpensiveValue(submitNumber);
            console.log('렌더링됨!')
            return res
        },
        [submitNumber]
      );

    const printNumber = () => {
        console.log(new_number)
    }

    return (
        <div>
            <input type='text' onBlur={(e)=>{setNumber(parseInt(e.target.value)); e.target.value=''}} />
            UseMemo
            <button onClick={()=>{
                printNumber()
                setSubmitNumber(number)
                }}>button</button>
            {result}
        </div>
    );

}

const computeExpensiveValue = (number) => {
for(let i = 0 ; i < 2000 ; i++){
console.log('😀');
}
return number
}

// 3. useMEMO
// 장점 : 같은 코드를 반복을 하지않고, 메모이제이션 함으로써 계산하지않고 같은 값을 그대로 내보내기에
// 효율성을 높인다.
// 단점 : 메모리 사용량이 많으면, 메모리 소모량이 많아진다.

import React, { useMemo, useState } from
'react';

export default function UseMemo() {
const [number, setNumber] = useState(0);
const [submitNumber, setSubmitNumber] = useState(0);
let new_number = 0;

    const result = useMemo(
        () => {
            const res = computeExpensiveValue(submitNumber);
            console.log('렌더링됨!')
            return res
        },
        [submitNumber]
      );

    const printNumber = () => {
        console.log(new_number)
    }

    return (
        <div>
            <input type='text' onBlur={(e)=>{setNumber(parseInt(e.target.value)); e.target.value=''}} />
            UseMemo
            <button onClick={()=>{
                printNumber()
                setSubmitNumber(number)
                }}>button</button>
            {result}
        </div>
    );

}

const computeExpensiveValue = (number) => {
for(let i = 0 ; i < 2000 ; i++){
console.log('😀');
}
return number
}

// 4. useCallback
// 장점 : 재호출을 함으로인해 복잡한 계산시간을 줄일수 있다.

import React, { useState, useCallback } from "react";
import Student from "./callback/Student";

function SmartHome() {

const [철수isHome, set철수isHome] = useState(false);
const [영희isHome, set영희isHome] = useState(false);
const [희철isHome, set희철isHome] = useState(false);

const 철수LeaveHome = useCallback(() => {
set철수isHome(!철수isHome);
}, [철수isHome]);

const 영희LeaveHome = useCallback(() => {
set영희isHome(!영희isHome);
}, [영희isHome]);

const 희철LeaveHome = useCallback(() => {
set희철isHome(!희철isHome);
}, [희철isHome]);

return (
<div>
<Student name="철수" isHome={철수isHome} action={철수LeaveHome}></Student>
<Student name="영희" isHome={영희isHome} action={영희LeaveHome}></Student>
<Student name="희철" isHome={희철isHome} action={희철LeaveHome}></Student>
</div>
);
}

export default SmartHome;
import React from "react";

function Student({ name, isHome, action }) {
console.log({ name, isHome });
return (
<div>
<button style={{width:"100px", height:"50px", fontSize:"24px"}} onClick={action}>
{name}
{isHome ? "🕺" : "🙈"}
</button>
</div>
);
}

export default React.memo(Student);

// 5. useEffect
// 장점 : 변경 시키고자 하는 state를 조건을 줄수있음으로 인해 상태관리에 용이하다
// 단점 : 단점은 없는것같습니다.

import React, {useEffect, useState } from "react";

export default function Products() {
const [isShow, setShow] = useState(false);
const [products, setProducts] = useState([]);

useEffect(()=>{
fetch('data/product.json')
.then((res)=>res.json())
.then((data) =>{
console.log("🔥데이터를 받아왔어요")
setProducts(data);
})
},[isShow])

const showHandler = () => {
setShow(!isShow);
}

return (
<>
<button onClick={showHandler}>보여주기</button>
<ul>
{!isShow && products.map((product) => (
<li key={product.id}>
<article>
<h3>{product.name}</h3>
<p>{product.price}</p>
</article>
</li>
))}
</ul>
</>
);
}
[
{
"name": "탕수육",
"price": "15000",
"id": "1234"
},
{
"name": "깐풍기",
"price": "22000",
"id": "12342"
},
{
"name": "유산슬",
"price": "15000",
"id": "12334"
},
{
"name": "짜장면",
"price": "6500",
"id": "1234112"
},
{
"name": "짬뽕",
"price": "7000",
"id": "123324"
}
]
