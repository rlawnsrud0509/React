import React, { useState } from "react";

function Counter() {
  let [count, Setcount] = useState(0);

  const addnum = () => {
    Setcount = count + 1;
  };

  const subnum = () => {
    Setcount = count - 1;
  };

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={addnum}>+</button>
        <button onClick={subnum}>-</button>
      </div>
    </>
  );
}

export default Counter;
