import React from "react";

function InputPanel(props) {
  return (
    <div>
      <div className="Amount">
        <input placeholder="Amount" type="number" />
      </div>

      <div className="Category">
        <label > Category </label>

        <select >
          <option > Food </option>
          <option> Travel </option>
          <option> Shopping </option>
          <option> Other </option>
        </select>
        
      </div>

      <div className="SubmitBtn">
        <button> Submit </button>
      </div>
    </div>
  );
}

export default InputPanel;
