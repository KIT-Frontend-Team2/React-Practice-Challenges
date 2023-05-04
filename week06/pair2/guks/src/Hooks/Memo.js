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
