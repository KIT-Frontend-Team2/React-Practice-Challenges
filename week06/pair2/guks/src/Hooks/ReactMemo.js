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
