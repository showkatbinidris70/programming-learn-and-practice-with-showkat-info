import React, { useEffect, useState } from "react";
const loadingMessage = <p>Todo is loading</p>;
export default function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        if (!res.ok) {
          throw Error("Featching is not success");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  return (
    <div>
      <h1 className="text-secondary">Use of useEffect Hook</h1>
      <div className="p-3" style={{ backgroundColor: "rgb(237, 230, 239)" }}>
        <h4 className="text-danger">Seen here only 10 data</h4>
        {error && <p>{error}</p>}
        {isLoading && loadingMessage}
        {todosElement}
      </div>
    </div>
  );
}
