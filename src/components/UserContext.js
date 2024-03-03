import React, { useState } from "react";
export const UserContext = React.createContext();
//provider, consumer
// step 1 : create context
// step 2 : wrap children with context provider
// step 3 : state access useContext hook