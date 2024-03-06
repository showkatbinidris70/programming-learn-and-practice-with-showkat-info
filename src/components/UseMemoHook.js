import React, { useMemo, useState } from "react";

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const onHandleIncrement = () => {
    setCount(count + 1);
  };
  const calculatedNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 5000000000; index++) {
      number++;
    }
    return number;
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onHandleIncrement}>increment</button>
      <h3>{calculatedNumber}</h3>
    </div>
  );
}
