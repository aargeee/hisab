import React, { useState, useContext } from "react";
import ListContext from "../Context/ListContext";
import styles from "../CSS/InputPanel.module.css";
import CheckIcon from '@mui/icons-material/Check';


function InputPanel(props) {
  const [newItem, setNewItem] = useState({
    amount: "",
    category: "Other",
  });

  const context = useContext(ListContext);
 

  return (
    <React.Fragment>
      <div className={styles.Amount}>
        <input
          placeholder="Amount"
          value={newItem.amount}
          onChange={(event) => {
            setNewItem((prevValue) => {
              return {
                amount: event.target.value,
                category: prevValue.category,
              };
            });
          }}
        />
      </div>

      <div className={styles.Category}>
      <div> Category </div>
        <select
          value={newItem.category}
          onChange={(event) => {
            setNewItem((prevValue) => {
              return {
                amount: prevValue.amount,
                category: event.target.value,
              };
            });
          }}
        >
          <option value={"Food"}>     😋 </option>
          <option value={"Travel"}>   😎 </option>
          <option value={"Shopping"}> 😍 </option>
          <option value={"Other"}>    😅 </option>
        </select>
      </div>

      <div className={styles.SubmitBtn}>
        <button
          onClick={() => {
            if (props.user === "1") {
              context.setUser1List((prev) => {
                return [...prev, newItem];
              });
            } else {
              context.setUser2List((prev) => {
                return [...prev, newItem];
              });
            }
            setNewItem(prev => {
              return {
              amount: "",
              category: prev.category,
            }});
          }}
        >
          <CheckIcon />
        </button>
      </div>
    </React.Fragment>
  );
}

export default InputPanel;
