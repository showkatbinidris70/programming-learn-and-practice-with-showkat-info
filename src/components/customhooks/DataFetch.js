import React, { useState, useEffect } from "react";

import useFetch from "./useFetch";

export default function DataFetch() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const loadingMessage = <p>Todos is loading</p>;
  const errorMessage = <p>{error}</p>;

  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  console.log(todosElement);
  return (
    <div>
      <h4 className="text-muted">
        Custom Hooks is used for reuse the code. It is used for difference API's
      </h4>
      <p className="text-muted">
        React JS Custom hooks is as like as JavaScript function
      </p>
      <div className="p-3" style={{ backgroundColor: "rgb(237, 230, 239)" }}>
        <h4 className="text-danger">Seen here only 10 data</h4>
        {error && errorMessage}
        {isLoading && loadingMessage}
        {todosElement}
      </div>
    </div>
  );
}
