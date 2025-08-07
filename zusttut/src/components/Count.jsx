import React from "react";
import useCountStore from "../context/CountContext";


function Count() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state)=>state.increment);
  const decrement = useCountStore((state)=>state.decrement);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Count;
