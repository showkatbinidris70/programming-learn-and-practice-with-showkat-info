import React, { useState, useEffect } from "react";
const loadingMessage = <p>Todos is loading</p>;
export default function DataFetch() {
  const { todos, setTodos } = useState(null);
//   const { isLoading, setLoading } = useState(true);
//   const { error, setError } = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("feathing is not successfull");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        // setLoading(false);
        // setError(null);
      })
      .catch((error) => {
        // setError(error.message);
        // setLoading(false);
      });
  }, []);
  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
    console.log(todosElement);
  return (
    <div>
      <h1>Custom Hooks is used for reuse the code. It is used for difference API's</h1>
      {/* {error && <p>{error}</p>} */}
      {/* {isLoading && loadingMessage} */}
      {todosElement}
    </div>
  );
}
