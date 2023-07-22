import React from "react";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";



function MainPage(props) {
  return (
    <div>
        <div className="Header">
            <div>
                <button onClick={()=> (props.setPage("Intro")) }> back </button>
            </div>

            <div>
                Hisaab
            </div>

        </div>
        
        <OutputSection> </OutputSection>
        <InputSection> </InputSection>
        
    </div>
  );
}

export default MainPage;
