import React, { useState, useContext } from "react";
import ListContext from "../Context/ListContext";


function InputPanel(props) {
  const [newItem, setNewItem] = useState({
    amount: "",
    category: "Other",
  });

  const context = useContext(ListContext);
 

  return (
    <div>
      <div className="Amount">
        <input
          placeholder="Amount"
          type="number"
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

      <div className="Category">
        <label> Category </label>

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
          <option> Food </option>
          <option> Travel </option>
          <option> Shopping </option>
          <option> Other </option>
        </select>
      </div>

      <div className="SubmitBtn">
        <button
          onClick={() => {
            if (props.user == "1") {
              context.setUser1List((prev) => {
                return [...prev, newItem];
              });

              setNewItem({
                amount: "",
                category: "Other",
              });
            } else {
              context.setUser2List((prev) => {
                return [...prev, newItem];
              });
              setNewItem({
                amount: "",
                category: "Other",
              });
            }
          }}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputPanel;
