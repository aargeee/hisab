import React from "react";
import ListContainer from "./ListContainer";
import InputPanel from "./InputPanel";
import styles from "../CSS/InputSection.module.css"

function InputSection() {
  return (
    <div className={styles.InputSection}>
      <div className={styles.User1}>
        <div className={styles.heading}>User 1 Name</div>
        <div className={styles.ListContainer}>
          <ListContainer user="1"> </ListContainer>
        </div>
        <div className={styles.InputPanel}>
          <InputPanel user="1"> </InputPanel>
        </div>
      </div>

      <div className={styles.User2}>
        <div className={styles.heading}>User 2 Name</div>
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
