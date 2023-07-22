import React from "react";
import ListContainer from "./ListContainer";
import InputPanel from "./InputPanel";

function InputSection(props) {
  return (
    <div>
      <div className="User-1">
        <div className="Header"></div>

        <ListContainer> </ListContainer>
        <InputPanel> </InputPanel>
      </div>

      <div className="User-2">
        <div className="Header"></div>

        <ListContainer> </ListContainer>
        <InputPanel> </InputPanel>
      </div>
    </div>
  );
}

export default InputSection;
