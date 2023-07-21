import { createContext, useState } from "react";

const NameContext = createContext();

const NameState = (props) => {
  const [user1Name, setUser1Name] = useState("");
  const [user2Name, setUser2Name] = useState("");

  return (
    <NameContext.Provider
      value={{ user1Name, user2Name, setUser1Name, setUser2Name }}
    >
      {props.children}
    </NameContext.Provider>
  );
};

export default NameContext;
export { NameState };
