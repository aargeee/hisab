import React, { useContext, useEffect, useState } from "react";
import styles from "../CSS/InputBlock.module.css";
import NamesContext from "../Context/NamesContext";
import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";
import { findAllByDisplayValue } from "@testing-library/react";

function InputBlock() {
  const context = useContext(NamesContext);
  const [user1Name, setUser1Name] = useState("");
  const [user2Name, setUser2Name] = useState("");

  useEffect(() => {
    console.log(context.user1Name, context.user2Name);
  });
  return (
    <div>
      <div>
        <h1> Welcome to Hisaab! </h1>
      </div>

      <div>
        <div>User-1 Name</div>
        <input
          type="text"
          value={user1Name}
          placeholder="First user name"
          onChange={(event) => {
            setUser1Name(event.target.value);
          }}
        />
      </div>

      <div>
        <div>User-2 Name</div>
        <input
          type="text"
          value={user2Name}
          placeholder="Second user name"
          onChange={(event) => {
            setUser2Name(event.target.value);
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            context.setUser1Name(user1Name);
            context.setUser2Name(user2Name);
          }}
        >
          {" "}
          GO{" "}
        </button>
      </div>
    </div>
  );
}

export default InputBlock;
