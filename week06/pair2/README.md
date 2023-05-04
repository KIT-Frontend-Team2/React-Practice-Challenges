# 국현

# useState

- useState는 함수형 컴포넌트에서 상태를 관리하기 위해 사용하는 훅 함수다.
  상태값과 해당 상태를 갱신할 수 있는 함수를 반환한다.

## 장점:

- 간단하고 직관적인 방식으로 상태를 관리할 수 있다.
- 함수형 컴포넌트에서도 상태를 사용할 수 있도록 도와준다.

## 단점:

- 상태의 변경이 있을 때마다 컴포넌트가 재렌더링된다. 이는 성능 이슈를 야기할 수 있다.

```jsx
import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default State;
```

# useRef

- useRef는 함수형 컴포넌트에서 참조값을 관리하기 위해 사용하는 훅 함수다.
- useRef를 사용하여 생성한 객체는 컴포넌트의 전체 라이프사이클 동안 유지되며, 참조값을 변경해도 컴포넌트가 재렌더링되지 않는다.

## 장점:

- DOM 요소에 접근하거나 값을 유지해야 할 때 사용하기 좋다.

## 단점:

- useRef를 사용하여 값이 변경되면 컴포넌트가 재렌더링되지 않기 때문에, 주의해서 사용해야 한다.

```jsx
import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export default Ref;
```

# useCallback

- useCallback은 함수를 메모이제이션하여 새로운 함수를 생성하는 비용을 줄이는 훅 함수입니다.
- 주어진 의존성 배열의 요소가 변경되지 않는 한, 이전에 생성된 함수를 반환합니다.

## 장점

- 메모이제이션된 함수를 사용하면 불필요한 함수 생성을 방지할 수 있습니다.
- 자식 컴포넌트에 콜백 함수를 전달할 때 성능을 최적화할 수 있습니다.

## 단점

- 함수가 메모이제이션되기 때문에 의존성 배열에 변경되는 요소를 제대로 명시해야 합니다.

```jsx
import React, { useState, useCallback } from "react";

const Callback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Callback;
```

# useMemo

- useMemo는 계산 비용이 많은 함수나 연산 결과를 메모이제이션하여 재계산을 방지하는 훅 함수입니다.
- 의존성 배열의 요소가 변경되지 않는 한, 이전에 계산된 값을 반환합니다.

## 장점

- 계산 비용이 많은 작업을 최적화할 수 있습니다.
- 자식 컴포넌트의 렌더링 성능을 향상시킬 수 있습니다.

## 단점

- 잘못된 의존성 배열을 사용하면 메모이제이션의 효과를 얻을 수 없습니다.

```jsx
import React, { useMemo } from "react";

const calculateExpensiveValue = () => {
  // 계산 비용이 많은 작업
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
};

const Memo = () => {
  const expensiveValue = useMemo(() => {
    return calculateExpensiveValue();
  }, []);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
    </div>
  );
};

export default Memo;
```

# React.memo

- React.memo는 컴포넌트를 메모이제이션하여 동일한 props로 재렌더링될 때 리렌더링을 방지하는 함수형 컴포넌트의 래퍼다.

## 장점

- 컴포넌트의 렌더링 성능을 향상시킬 수 있습니다.

## 단점

- 복잡한 조건으로 인해 잘못된 메모이제이션 결과를 가져올 수 있습니다.

```jsx
import React from "react";

const ReactMemo = React.memo(({ prop1, prop2 }) => {
  // prop1과 prop2가 변경되지 않는 한, 이전에 렌더링된 컴포넌트를 재사용한다.
  return (
    <div>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
});

export default ReactMemo;
```

# useEffect

- useEffect는 컴포넌트 라이프사이클에 효과를 부여하기 위해 사용하는 훅 함수다.
- 컴포넌트가 렌더링된 후에 실행되며, 의존성 배열의 요소가 변경될 때마다 실행될 수 있다.

## 장점

- 컴포넌트의 라이프사이클 이벤트를 처리하고 부수 효과를 수행할 수 있습니다.

## 단점

- 의존성 배열을 잘못 사용하면 무한 루프가 발생할 수 있습니다.

```jsx
import React, { useState, useEffect } from "react";

const mockFetchData = () => {
  return new Promise((resolve) => {
    // 임의의 데이터 반환 (예시를 위해 지연시간 추가)
    setTimeout(() => {
      resolve([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ]);
    }, 1000);
  });
};

const Effect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await mockFetchData();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Effect;
```

---

# 진섭

# React Hooks 장단점

# 등장 배경

React Conf 2018 에 발표되었고, Class component 의 불편함을 해소하기 위해 개발됨

리액트 컴포넌트 정의 방법 2가지

- 클래스 컴포넌트 기반
  - state로 상태변화 관리 가능함수
- 컴포넌트 기반
  - 주로 화면에 그리는 역할
  - state 와 라이프사이클 API 사용이 불가능함

클래스 컴포넌트 기반

- 재사용을 위해서 2가지 패턴 사용
  - Higher-order components
  - Render props
- 하지만 : 엄청난 양의 wrapper component 가 발생되어 wrapper hell 이 발생됨
- 클래스는 : this 키워드가 사용되는데, 이게 항상 정확히 일치하지 않아서 혼란을 초래한다.

# 기능

**클래스 컴포넌트**에서만 사용가능한 state 관리나 라이프사이클 메서드를 → **함수 컴포넌트**에서 사용가능하도록 해주는 기능이 "React Hooks" 이다.

# 장점

Hooks를 쓰면 class 없이 state 와 React 여러 기능을 사용할 수 있다.

빠른 성능과 짧은 코드의 양

- 리액트의 코드는 → 바벨로 코드를 컴파일 → 실행된다.
  - 클래스형 컴포넌트 사용하면 → 느리다. (코드양이 길어진다.)
  - 클래스형 컴포넌트 (componentDidMount, componentDidUpdate, componentWillUnmount) → 이것들을 리액트 hooks 로 간단히 처리 가능
- 클래스로 재사용가능한 로직을 만들려면, HOC를 써야하는데 나중에는 HOC Hell이 된다.
  - HOC\* 함수는 Wrapper 컴포넌트의 양이 엄청나게 증가하고, 복잡해진다.
  - Custom React Hooks 를 사용하여 간단히 구현가능 (HOC Hell 에서 탈출)

# 단점

hooks 는 반복분, 조건문, 중첩된 함수에서 호출이 불가하다.

- 반복문에서 사용하려면, useFetch 에 react-async-hook 라이브러리를 쓰거나, custom hook 을 만들어야 한다.
- hooks 을 사용하려고 많은 리소스가 필요해진다.
- 간단한 기능이라도, hooks 의 규칙에 막힌다면 길게 돌아가는 코드로 되어버린다.

useEffect 의 종속성 비교 문제

- useEffect 의 활용도가 높은데, hooks dependency array 사용시 불편한 점 발생된다.
- this 를 많이 사용하는데, this가 엉켜서 헷갈리는 편이다.

Hooks 는 클로저에 너무 의존적이다.

- 컴포넌트가 커질수록 Hooks가 많아지는데, 클로저는 복잡성을 증가시킨다.

Hooks 의 규칙

- Hooks의 **규칙**은 개발에 한계를 만든다.

# 기타

HOC : High Order Component

바벨 테스트 페이지 : [https://babeljs.io/](https://babeljs.io/)
