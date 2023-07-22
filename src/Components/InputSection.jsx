import React from "react";
import ListContainer from "./ListContainer";
import InputPanel from "./InputPanel";
import styles from "../CSS/InputSection.module.css"

function InputSection(props) {
  return (
    <div className={styles.InputSection}>
      <div className={styles.User1}>
        <div className="Header"></div>

        <ListContainer> </ListContainer>
        <InputPanel> </InputPanel>
      </div>

      <div className={styles.User2}>
        <div className="Header"></div>

        <ListContainer> </ListContainer>
        <InputPanel> </InputPanel>
      </div>
    </div>
  );
}

export default InputSection;
