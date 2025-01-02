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
    <div className="flex justify-center items-center min-h-screen mx-auto max-w-7xl">
      <div className="text-center">
        <h1>Counter with Redux</h1>
        <button onClick={handleIncrement} className="bg-orange-500 hover:bg-gray-300 p-3 rounded-lg">
          Increment
        </button>
        <p>0</p>
        <button onClick={handleDecrement} className="bg-orange-500 hover:bg-gray-300 p-3 rounded-lg">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
