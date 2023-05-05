## 📓 pair1) React-hook함수 예습, 정리


### Hook이란?
# React hook 함수 장단점 정리
ReactConf 2018에서 발표된 class없이 state를 사용할 수 있는 새로운 기능이다. 

장점 
1. 컴포넌트로부터 상태 관련 로직을 추상화할 수 있다. 
React는 컴포넌트간에 재사용 가능한 로직을 붙이는 방법을 제공하지 않는다. 이전부터 React를 사용해왔다면, render props이나 고차 컴포넌트와 같은 패턴을 통해 이러한 문제를 해결하는 방법에 익숙할 것이다. 그러나 이런 패턴의 사용은 컴포넌트의 재구성을 강요하며, 코드의 추적을 어렵게 만든다. 
Hook을 사용하면 컴포넌트로부터 상태 관련 로직을 추상화할 수 있다. 이를 이용해 독립적인 테스트와 재사용이 가능하다. Hook은 계층의 변화없이 상태 관련 로직을 재사용할 수 있도록 도와준다. 

2. Class없이 React 기능들을 사용하는 방법을 제시한다. 
React에서의 Class 사용을 위해서는 JavaScript의 this 키워드가 어떻게 작동하는지 알아야만 한다. 하지만 JavaScript의 this 키워드는 대부분의 다른 언어에서와는 다르게 동작함으로 사용자에게 큰 혼란을 주고 코드의 재사용성과 구성을 어렵게 만든다. 이러한 문제를 해결하기 위해 Hook은 Class없이 React 기능들을 사용하는 방법을 제시한다. 개념적으로 React 컴포넌트는 항상 함수에 더 가깝다. Hook은 명령형 코드로 해결책을 찾을 수 있게 해주며 복잡한 함수형 또는 반응형 프로그래밍 기술을 배우도록 요구하지 않는다. 

단점 
1. 호출되는 순서에 의존한다.
Hooks은 반복문, 조건문, 중첩된 함수 내에서 호출할 수 없다. 
만약 클릭하면 페이징되는 버튼을 구현하기 위해 useFetch를 사용하려고 한다면, react-async-hook 라이브러리를 사용하거나 custom hook을 만들어서 해결해야한다. 
<br>
<br>
<br>
<br>

### 더 짧은 성능과 짧은 코드

- 리액트에서 작성한 코드와 바벨을 이용해서 코드를 컴파일한 후에는 코드가 길어짐을 알 수 있다.

- 만약 공통적으로 적용해야 하는 wrapper 컴포넌트가 있다면 감싸서 작성하여 

- 클래스에서는 반복적이고 불필요한 느낌의 코드가 보이지 않습니다. 

- 로직을 한 곳으로 모을 수 있어서 가독성이 좋다

- 많은 라이브러리들도 훅으로만 나오고 있다.

- HOC 헬을 벗어 날 수 있다.
<br>
<br>
<br>

 
----

<br>

## useState


> ##  사용법  
><우리의 시간을 간편하게 생성하고 업데이트 시킬 수 있는 도구를 제공해줌 
> - useState 생성과 동시에 가져야할 초기값을 선언해줌 -> useState의 인자로 넣어줌 -> state, setState의 두가지 요소를 배열 형태로 리턴해줌 
>- 우리의 현재 상태값은 state라는 변수에 담아주고 
state을 변경시켜주고 싶을 때는 setState함수를 이용해서 변경시킬 수 있음 
> - state, setState의 이름은 자유 
const [state, setState] = useState(초기값);

```
export default function Profile () {
    const [name,setName] = useState('');
    return (
        <div>
            <p>{`name is ${name}`}</p>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
        </div>
    )
}
```

   
 


⭐️ setState 는 새로운 값을 가지고 컴포넌트를 다시 불러줍니다.
<br>

⭐️ useState는 함수형 컴포넌트에서 상탯값을 관리하게 해줍니다.


> ### 장점

- 간결함: 함수형 컴포넌트를 사용하면 클래스 컴포넌트보다 더 간결한 코드를 작성할 수 있습니다. useState를 사용하면 상태 관리가 더욱 간편해집니다.

- 쉬운 상태 초기화: useState를 사용하면 상태 초기화가 쉬워집니다. 상태 변수를 초기화할 때 간단한 값이나 함수를 전달할 수 있습니다.

- 개별 상태 업데이트: useState를 사용하면 여러 상태를 독립적으로 업데이트할 수 있습니다. 이를 통해 관심사의 분리가 용이해지고 코드의 가독성이 향상됩니다.

- 커스텀 훅 작성 용이: useState를 사용하면 커스텀 훅을 작성하기 쉽습니다. 이를 통해 비슷한 로직이나 상태 관리를 재사용할 수 있어 코드의 중복을 줄일 수 있습니다. 

> ### 단점
- 비동기 업데이트: useState의 상태 업데이트는 비동기적으로 이루어집니다. 때문에 연속적인 상태 업데이트를 다루기 어려울 수 있으며, 이를 해결하기 위해 함수를 사용해야 할 수도 있습니다.

- 복잡한 상태 관리: useState는 간단한 상태 관리에 적합하지만, 상태가 복잡해지고 상태 간의 상호작용이 많아지면 코드가 복잡해질 수 있습니다. 이 경우, useReducer나 상태 관리 라이브러리(예: Redux)를 사용하는 것이 더 적합할 수 있습니다.

- 상태 변경 시 부수효과 처리: 상태 변경에 따른 부수 효과를 처리하기 위해서는 useEffect와 같은 훅을 사용해야 합니다. 이는 코드의 가독성을 떨어뜨릴 수 있습니다.

<br>
<br>

## useRef

> 특징<br>
useRef(매개변수)라는 함수를 호출하면 plain JavaScript object를 return하고, { current: 매개변수 }로 초기값이 설정됩니다.<br>
이렇게 useRef()를 호출해서 만들어진 object는 그 컴포넌트의 전체 라이프사이클 동안 유지가 됩니다.<br>
current의 값을 변경해도 re-render가 되지 않습니다.<br><br>
주로 텍스트박스같이 input요소에 focus를 줄 때 많이 사용됨 
예를 들어 로그인 페이지가 로딩돼서 화면에 보여줄 때 id를 넣는 공간을 굳이 클릭하지 않아도 자동으로 focus가 되어있게해주면 바로 키보드를 쳐서 id를 입력할 수 있으니 편함 
즉, Ref를 사용하면 쉽게 DOM요소에 접근해서 작업가능 




### 장점:

- 직접 DOM 접근: useRef를 사용하면 DOM 엘리먼트에 직접 접근할 수 있습니다. 이를 통해 DOM 속성, 메소드에 접근하거나 변화를 줄 수 있습니다.<br>

- 지속적인 값 유지: useRef로 생성된 참조는 컴포넌트 렌더링 사이에도 값이 유지됩니다. 이를 통해 값의 변경 없이 이전 값에 접근할 수 있습니다.<br>

- 변경에 따른 렌더링 방지: useRef로 생성된 참조의 값이 변경되어도 컴포넌트가 리렌더링되지 않습니다. 이를 통해 필요하지 않은 렌더링을 방지할 수 있습니다.<br>
==> 이 부분에서 useState에서의 불필요한 렌더링을 방지

<br>

### 단점:

- 코드 복잡성: useRef를 사용하면 코드가 복잡해질 수 있습니다. 특히, DOM 조작을 많이 수행할 경우 코드의 가독성이 떨어질 수 있습니다..<br>

- 잘못된 사용으로 인한 성능 저하: useRef를 사용하여 DOM을 직접 조작하면, 리액트의 최적화 기능을 무시하게 되어 성능 저하가 발생할 수 있습니다. 따라서, 필요한 경우에만 사용해야 합니다..<br>

- 불필요한 사용: useRef의 사용을 과도하게 하면, 코드의 일관성이 떨어질 수 있습니다. 상태 관리나 부수 효과 처리에 적합한 훅(useState, useEffect 등)을 사용하는 것이 바람직합니다.

> ### 사용법
> useRef에서는 객체로 반환되어 console.log을 찍어보면 current라는 키값에 값이 담겨져 있다.<br>
> 따라서 inputRef.current 

```import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`입력된 텍스트: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>텍스트 출력</button>
    </div>
  );
}

export default TextInput;
```


---

## useMemo
컴포넌트 성능을 최적화하기 위해서 사용하는 대표적인 Hook함수는 useCallback과 useMemo가 있음 

>  함수형 컴포넌트에서 메모이제이션(결과 값을 저장하여 중복 계산을 방지하는 기법)을 구현할 수 있도록 도와주는 훅입니다.(캐시에서 꺼내서 사용)<br>
> Memo = Memoization
Memoization은 동일한 값을 리턴하는 함수를 반복적으로 호출해야한다면 맨 처음 값을 계산할 때 해당 값을 메모리에 저장해서 필요할 때마다 또 다시 계산하지 않고 메모리에서 꺼내서 재사용하는 기법 <br>
> 즉, 자주 필요한 값을 맨 처음 계산할 때 캐싱해서 그 값이 필요할 때마다 다시 계산하는게 아니라 꺼내서 사용 



<br> useMemo를 사용하면 렌더링 성능을 개선할 수 있지만, 장단점이 있습니다.

> 장점:

- 성능 최적화: useMemo를 사용하면 복잡한 연산이나 계산이 많이 필요한 함수의 결과 값을 메모이제이션하여 불필요한 재계산을 방지할 수 있습니다. 이를 통해 렌더링 성능이 개선됩니다.

- 참조 일관성 유지: useMemo를 사용하면 연산 결과가 변경되지 않았다면, 이전 결과의 참조를 유지할 수 있습니다. 이를 통해 컴포넌트 렌더링 간의 일관성을 유지할 수 있습니다.

- 리렌더링 최소화: useMemo를 사용하면, 연산 결과가 변경되지 않았다면 컴포넌트를 리렌더링하지 않고 이전 결과를 사용할 수 있습니다. 이를 통해 불필요한 리렌더링을 최소화할 수 있습니다.

> 단점:

- 코드 복잡성 증가: useMemo를 사용하면 코드가 복잡해질 수 있습니다. 특히, 과도한 메모이제이션 사용으로 인해 코드의 가독성이 떨어질 수 있습니다.

- 메모리 사용량 증가: useMemo는 연산 결과를 메모리에 저장하므로, 메모이제이션을 과도하게 사용하면 메모리 사용량이 증가합니다. 이는 애플리케이션의 전반적인 성능에 영향을 줄 수 있습니다.

- 성능 최적화의 오용: useMemo를 불필요한 경우에 사용하면, 오히려 성능이 저하될 수 있습니다. 메모이제이션 오버헤드로 인해 성능이 오히려 떨어질 수 있으므로, 성능이 중요한 부분에서만 사용하는 것이 좋습니다.

<br>



 의존성 배열이 변경되거나 처음 호출된 경우, create 함수를 호출하여 새 결과 값을 계산합니다. 이 값을 hook.memoizedState에 저장하고 반환합니다.

useMemo의 소스 코드는 의존성 배열의 변경 여부를 확인하고, 필요한 경우 결과 값을 메모이제이션하여 성능 최적화를 도와주는 방식으로 구성되어 있습니다


>  useMemo의 사용법 <br>

 ```
const memoizedValue = useMemo(()=>computeExpensiveValue(a,b),[a,b])

const value = useMemo(()=>{
    return calculate();
},[item])

```

<br>


```
import React, { useState, useMemo } from 'react';

const calculateAverage = (numbers) => {
  console.log('평균값 계산...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => calculateAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
}

export default Average;

```

이 예제에서 calculateAverage 함수는 숫자 목록의 평균값을 계산하는 함수입니다. 이 함수가 불필요하게 여러 번 호출되는 것을 방지하기 위해 useMemo를 사용합니다.

list 상태가 변경될 때마다 useMemo의 의존성 배열에 있는 list가 업데이트되고, calculateAverage 함수가 호출되어 평균값을 계산합니다. list 상태가 변경되지 않는 한, useMemo는 이전에 계산된 평균값을 반환합니다. 이를 통해 불필요한 재계산을 방지하고 성능을 최적화할 수 있습니다.

- 콜백함수는 Memoization해줄 값을 계산해서 return 해주는 함수 
- 배열은 의존성 배열이라고 부르는데, 배열안에 요소의 값이 업데이트될 때만 콜백함수를 다시 호출해서 Memoization된 값을 업데이트해서 다시 Memoization을 해줌 
---
## useCallback
> useCallback 또한 useMemo와 같이 메모이제이션을 사용한다.<br>
인자로 전달한 콜백함수 그 자체를 메모이제이션해준다.<br><br>
const caculate = useCallback((num)=>{
  return num + 1;
},[item])<br><br>
만약에 calculate 함수를 Memoization해준다면 useCallback으로 그 함수를 감싸주면됨 그래서 이 함수가 필요할 때마다 다시 생성하는게 아니라 메모리에서 가져와서 재사용 
<br>
```
import React, { useState, useCallback } from 'react';

// 자식 컴포넌트
const ChildComponent = ({ onClick }) => {
  console.log('ChildComponent 렌더링');
  return <button onClick={onClick}>상태 업데이트</button>;
};

// 부모 컴포넌트
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // 의존성 배열은 빈 배열로 설정합니다.

  console.log('ParentComponent 렌더링');

  return (
    <div>
      <h1>카운트: {count}</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
```
컴포넌트 내부에 있는 모든 변수들이 초기화

컴포넌트가 다시 렌더링이되더라도  useCallback을 사용하게 되면, 메모이제이션된 함수는 초기화되지 않고, 맨처음 렌더링 될 때만 만들어서 초기화 해주고, 그 이후에 렌더링되는 것들은 저장한 것들을 불러온다고 생각하면 된다.

> 장점:

- 참조 일관성 유지: useCallback을 사용하면, 의존성 배열이 변경되지 않는 한 함수의 참조를 유지할 수 있습니다. 이를 통해 불필요한 자식 컴포넌트의 리렌더링을 방지할 수 있습니다.

- 성능 최적화: useCallback을 사용하면 렌더링 성능을 개선할 수 있습니다. 메모이제이션된 콜백 함수를 사용하면, 불필요한 함수 재생성을 방지하고 자식 컴포넌트의 리렌더링 횟수를 줄일 수 있습니다.

- 이벤트 핸들러 최적화: useCallback은 이벤트 핸들러 함수를 메모이제이션하는 데 유용합니다. 이벤트 핸들러 함수를 메모이제이션하면, 이벤트 리스너가 동일한 함수 참조를 사용하게 되어 성능이 개선됩니다.

> 단점:

- 코드 복잡성 증가: useCallback을 사용하면 코드가 복잡해질 수 있습니다. 특히, 과도한 메모이제이션 사용으로 인해 코드의 가독성이 떨어질 수 있습니다.

- 메모이제이션 오버헤드: useCallback은 함수를 메모리에 저장하므로, 메모이제이션 오버헤드가 발생합니다. 성능 향상이 크지 않은 경우에는 이 오버헤드가 성능에 부정적인 영향을 미칠 수 있습니다.

- 성능 최적화의 오용: useCallback을 불필요한 경우에 사용하면, 오히려 성능이 저하될 수 있습니다. 함수 생성에 대한 오버헤드가 크지 않거나 자식 컴포넌트의 리렌더링이 문제가 되지 않는 경우에는 사용하지 않는 것이 좋습니다.

useMemo는 계산된 값을 메모이제이션하는 데 사용되며, useCallback은 함수 자체를 메모이제이션하는 데 사용됩니다. 이 두 Hooks는 서로 다른 목적과 사용 사례에 따라 선택할 수 있습니다.


## 의존성 배열

의존성 배열(dependency array)은 React Hooks에서 사용되는 배열로, 일반적으로 useEffect, useMemo, useCallback과 같은 Hooks에서 사용됩니다. 의존성 배열은 해당 Hooks가 참조하는 값이 변경되었을 때만 실행되어야 하는 경우를 정의하는 데 사용됩니다.

의존성 배열에 포함된 값들이 변경되면:


```
useEffect(() => {
  // 이 부분은 의존성 배열에 있는 값이 변경될 때마다 실행됩니다.
  console.log('count가 변경되었습니다:', count);
}, [count]); // 의존성 배열에 count를 추가합니다.
```

의존성 배열이 빈 배열인 경우, 해당 Hooks는 컴포넌트가 마운트될 때 한 번만 실행되고, 그 이후에는 실행되지 않습니다. 이는 초기화와 같은 일회성 작업을 수행하는 데 유용합니다.


```
useEffect(() => {
  // 이 부분은 컴포넌트가 마운트될 때 한 번만 실행됩니다.
  console.log('컴포넌트가 마운트되었습니다.');
}, []); // 의존성 배열이 비어 있습니다.
```

### React.memo
>React.memo는 Memoization(메모이제이션) 기법으로 동작하며, 고차 컴포넌트(Higher Order Component, HOC)이다.<br>
컴포넌트가 props로 동일한 결과를 렌더링하면, React.memo를 호출하고 결과를 메모이징(Memoizaing) 하도록 래핑하여 경우에 따라 성능 향상을 할 수 있다.

- props가 이전과 동일한 값이면 재렌더링하지 않고, 다른 값이면 재렌더링하여 컴포넌트를 다시 만들어 반환한다.

- React.memo에 쓰인 컴포넌트 안에서 구현한 state가 변경되면 컴포넌트는 재렌더링이 된다.

- useMemo처럼 Memoization 기법으로 동작

- 인자로 받는 props가 변화할 때 재렌더링되고, 이전과 동일하면 예전 결과값을 반환
React.memo로 감싸진 함수 컴포넌트 안에서 구현한 state가 변화하면 재렌더링 된다.

- React.memo에서 props가 객체로 받아진다면 얕은 비교로 기본동작한다.(비원시타입 동일)

- React.memo에서 다른 비교 동작을 원한다면 두번째 인자에 별도의 비교함수를 만들어야 한다.

React.memo는 보통 컴포넌트가 같은 Props로 자주 렌더링이 될때
컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야할 때

```
function MovieViewsRealtime({ title, releaseDate, views }) {
  return (
    <div>
      <Movie title={title} releaseDate={releaseDate} />
      Movie views: {views}
    </div>
  );
}

export function Movie({ title, releaseDate }) {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

export const MemoizedMovie = React.memo(Movie);
```


## useEffect

- useEffect를 이용하면 우리는 React에게 컴포넌트에게 렌더링 이후에 어떤 일을 수행하는지 알려줄 수 있다.

- React는 우리가 넘긴 함수를 기억했다가 DOM업데이트를 수행한 이후에 불러낸다.
Effect Hook을 이용하면 함수형 컴포넌트에서도 생명주기 메서드를 사용할 수 있고, side effect를 수행할 수 있다.

- useEffect는 기본적으로 1)컴포넌트가 최초로 렌더링 될 때, 2)지정한 state나 prop가 변경될 때(=업데이트 될 때)마다 이펙트 콜백 함수가 호출됩니다.


```
1. deps를 아무것도 안 줄 경우
-> render마다 side effect, clean-up 모두 불린다.

useEffect ( () => {
   console.log("hi!");
});

2. deps를 []로 줄 경우
-> render시에 딱 한번 componentDidMount처럼 불린다. 그 이후에는 side effect, clean-up 모두 불리지 않는다.
 This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. 
useEffect ( () => {
   console.log("hi!");
}, []);

3. deps에 특정 변수를 줄 경우
-> (cntA가 변할때만) render하고 clean-up function이 불리고, useEffect 내부가 호출된다. 
useEffect(() => {
    console.log("useEffect First!")
    console.log(`inner stateA = ${cntA}`);
    console.log(`inner stateA = ${cntB}`);
    return () => {
      console.log("clean up function");
      console.log(`outer stateA = ${cntA}`);
      console.log(`outer stateA = ${cntB}`);
    };
  }, [cntA]);
```
