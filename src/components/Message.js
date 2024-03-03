import React, { memo } from "react";

const Message = ({ initialValueOfMsg, onHangleIncrement }) => {
  console.log("message is rendering");
  return (
    <div>
      <h2>Message initial value : {initialValueOfMsg}</h2>
      <button className="btn btn-primary" onClick={onHangleIncrement}>
        Increment
      </button>
    </div>
  );
};
export default memo(Message);
