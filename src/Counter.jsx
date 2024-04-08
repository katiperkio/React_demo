import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    console.log("Foxes forever");
    setCounter(counter + 1);
  };

  const removeHandler = () => {
    setCounter(counter - 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={addHandler}>+</button>
      <button onClick={removeHandler}>-</button>
      <button onClick={resetHandler}>reset</button>
    </>
  );
};

export default Counter;
