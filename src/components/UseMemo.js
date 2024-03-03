import React, { useState } from "react";
import Message from "./Message";
import Markdown from "react-markdown";

export default function UseMemo() {
  const [num, setNum] = useState(0);
  console.log("memo render");

  const markdown1 = `
  export default function UseMemo() {

    const [num, setNum] = useState(0);

    console.log("memo render");

    return (

      <div>

        <h1>Initial Value : {num}</h1>

        <button

          className="btn btn-primary"

          onClick={() => {

            setNum((num) => num + 1);

          }}

        >
          Increment

        </button>

        <Message />

      </div>

    );

  }
  
  `;
  return (
    <div>
      <p className="py-2 px-3 rounded markdownBgColor">
        <Markdown>{markdown1}</Markdown>
      </p>
      <h1>Initial Value : {num}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNum((num) => num + 1);
        }}
      >
        Increment
      </button>
      <Message initialValueOfMsg={num} />
    </div>
  );
}
