import React, { useContext } from "react";
import ListContainer from "./ListContainer";
import InputPanel from "./InputPanel";
import styles from "../CSS/InputSection.module.css"
import NamesContext from "../Context/NamesContext";

function InputSection() {

  const cxt = useContext(NamesContext)

  return (
    <div className={styles.InputSection}>
      <div className={styles.User1}>
        <div className={styles.heading}>{cxt.user1Name}</div>
        <div className={styles.ListContainer}>
          <ListContainer user="1"> </ListContainer>
        </div>
        <div className={styles.InputPanel}>
          <InputPanel user="1"> </InputPanel>
        </div>
      </div>

      <div className={styles.User2}>
        <div className={styles.heading}>{cxt.user2Name}</div>
        <div className={styles.ListContainer}>
          <ListContainer user="2"> </ListContainer>
        </div>
        <div className={styles.InputPanel}>
          <InputPanel user="2"> </InputPanel>
        </div>
      </div>
    </div>
  );
}

export default InputSection;
