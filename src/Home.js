import React, { useEffect, useState } from "react";
import UseShowkat from "./components/customhooksTow.js/useShowkat";
import FetchData from "./components/customhooksTow.js/FetchData";
import UseMemoHook from "./components/UseMemoHook";

export default function Home() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=2")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <div className="d-none">
        {/* use Memo */}
        {/* <UseMemoHook /> */}
        {/* use state */}
        <div>
          <h3>Initial Value : {count}</h3>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            increment
          </button>
        </div>
        {/* use effect */}
        {todosElement}
        {/* custom hooks */}
        <FetchData />
      </div>
      <div>
        <p className="fs-5">
          প্রত্যেকটি hooks এরই কিন্তু নিজস্ব Unique API রয়েছে। কিছু hooks
          শুধুমাত্র একটি value রিটার্ন করে{" "}
          <span className="text-primary">(যেমন useRef এবং useContext)</span>,
          আবার কিছু আছে যারা একটি pair of values রিটার্ন করে থাকে।{" "}
          <span className="text-primary">(যেমন useState and useReducer) </span>
          এবং বাকিরা কিছুই রিটার্ন করে না{" "}
          <span className="text-primary">(যেমন useEffect)</span>।
        </p>
      </div>
    </div>
  );
}
