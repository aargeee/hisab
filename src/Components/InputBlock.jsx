import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../CSS/InputBlock.module.css";
import NamesContext from "../Context/NamesContext";

function InputBlock(props) {
  const context = useContext(NamesContext);
  const [user1Name, setUser1Name] = useState("");
  const [user2Name, setUser2Name] = useState("");
  const user2inpRef = useRef()

  return (
    <div className={styles.InputBlock}>
      <div className={styles.heading}>
        <div> Welcome to Hisaab! </div>
      </div>

      <div className={styles.userwrapper}>
        <div className={styles.user1}>
          <div>User 1 Name</div>
          <input
            onKeyDown={e => {
              if (e.code === "Enter" || e.code === "NumpadEnter") {
                user2inpRef.current.focus()
                // document.querySelector("#root > div > div > div > div.InputBlock_userwrapper__rxRq8 > div.InputBlock_user2__eBWNs > input[type=text]").focus()
              }
            }}
            type="text"
            value={user1Name}
            placeholder="Enter a name"
            onChange={(event) => {
              setUser1Name(event.target.value);
            }}
          />
        </div>

        <div className={styles.user2}>
          <div>User 2 Name</div>
          <input
            ref={user2inpRef}
            onKeyDown={e => {
              if (e.code === "Enter" || e.code === "NumpadEnter") {
                context.setUser1Name(user1Name);
                context.setUser2Name(user2Name);
                props.setPage("Main");
              }
            }}
            type="text"
            value={user2Name}
            placeholder="Enter a name"
            onChange={(event) => {
              setUser2Name(event.target.value);
            }}
          />
        </div>
      </div>


      <div className={styles.btncontainer}>
        <button
          className={styles.gobtn}
          onClick={() => {
            context.setUser1Name(user1Name);
            context.setUser2Name(user2Name);
            props.setPage("Main");

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
