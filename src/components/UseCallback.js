import React, { useCallback, useState } from "react";
import Message from "./Message";
import Markdown from "react-markdown";

export default function UseCallback() {
  const [num, setNum] = useState(0);
  const [toggle, setToggle] = useState(false);
  console.log("call back render");
  const handleIncrementMessage = useCallback(() => {
    setNum(num + 1);
  }, []);
  const markdown1 = `
  const [num, setNum] = useState(0);

  const [toggle, setToggle] = useState(false);

  console.log("call back render");

  const handleIncrementMessage = useCallback(() => {

    setNum(num + 1);
    
  }, []);
  
  `;
  const markdown2 = `
  return (

    <div>

      {toggle ? "On" : "False"}

      <button

        className="btn btn-primary ms-3"

        onClick={() => {

          setToggle(!toggle);

        }}

      >
        Toggle

      </button>

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

      <Message

        initialValueOfMsg={num}

        onHangleIncrement={handleIncrementMessage}

      />

    </div>

  );
  
  `;
  return (
    <div>
    <p className="fs-5"><span className="text-bold">Use Callback : </span>useCallback ও useMemo এর মতো Unnecessary code যেন render না হয় তার জন্য ব্যবহার করা হয় । useCallback মূলত use হয় state এর value যদি change না হয় তাহলে Callback function ও যেন 
    define না হয়।
    </p>
      {toggle ? "On" : "False"}
      <button
        className="btn btn-primary ms-3"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <p className="py-2 px-3 rounded markdownBgColor">
        <Markdown>{markdown1}</Markdown>
      </p>
      <p className="py-2 px-3 rounded markdownBgColor">
        <Markdown>{markdown2}</Markdown>
      </p>
      <h1>Parent Initial Value : {num}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNum((num) => num + 1);
        }}
      >
        Increment
      </button>
      <Message
        initialValueOfMsg={num}
        onHangleIncrement={handleIncrementMessage}
      />
    </div>
  );
}
