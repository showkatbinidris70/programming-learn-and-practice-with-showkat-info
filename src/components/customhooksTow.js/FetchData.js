import React, { useEffect, useState } from "react";

import useShowkat from "./useShowkat";

export default function FetchData() {
  const { data } = useShowkat(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  return (
    <div>
      {data &&
        data.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
}
