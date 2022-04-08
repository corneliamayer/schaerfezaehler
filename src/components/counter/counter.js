import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCounter] = useState(0);

  //useEffect(() => {
  //  setCounter(3);
  //}, []);

  return (
    <>
      <div>Anzahl SCHARF: {count}</div>
      <button onClick={() => setCounter(count + 1)}>Add SCHARF</button>
    </>
  );
};
