import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Component2() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <p>
        useContext: useContext হলো যার মাধ্যমে parent component থেকে child
        component এ props পাঠাতে পারে । প্রথমে context create করতে হবে,
        React.createContext();
      </p>
      <p>useContext এর মাধ্যমে কোন একটা state কে globally declare করতে পারি</p>
    </div>
  );
}
