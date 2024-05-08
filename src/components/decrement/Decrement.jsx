import React from "react";
import "./Decrement.css";
import { useSelector, useDispatch } from "react-redux";
import { dec } from "../../context/counterSlice";
function Decrement(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button
        disabled={count <= 0}
        onClick={() => dispatch(dec(+props?.text == "" ? 1 : +props.text))}
      >
        -
      </button>
    </div>
  );
}

export default Decrement;
