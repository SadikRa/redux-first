import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div >
        <h1>Counter with Redux</h1>
        <Button onClick={handleIncrement}>
          Button
          Increment
        </Button>
        <p>0</p>
        <Button onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default App;
