import React, { useCallback, useState } from "react";
import Message from "./Message";
import Markdown from "react-markdown";
import { UserContext } from "./UserContext";
import Component2 from "./Component2";

export default function Component1() {
  const [user, setUser] = useState({ id: 101, name: "Showkat Ali" });
  return (
    <UserContext.Provider value={{ user }}>
      {/* <Component2 /> */}
    </UserContext.Provider>
  );
}
