import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>

      <div>{count}</div>

      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
