import React, { useCallback, useState } from "react";
import Message from "./Message";
import Markdown from "react-markdown";
import { UserContext } from "./UserContext";

export default function Component1() {
 const [user, setUser] = useState({id:"101", name:"Showkat Ali"})
  return (
    <UserContext.Provider value={{user}}>

    </UserContext.Provider>
  );
}
