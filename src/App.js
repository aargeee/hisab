import IntroPage from "./Components/IntroPage";
import {NameState } from "./Context/NamesContext";
import MainPage from "./Components/MainPage";

import "./App.css"
import { useState } from "react";

function App() {
  const [page,setPage] = useState("Intro") ;
  
  return (
    <div className="App">
      <NameState>
         {page==="Intro" && <IntroPage setPage={setPage}> </IntroPage>}
         {page==="Main" && <MainPage setPage={setPage}> </MainPage> }
         
      </NameState>
    </div> 
  ); 
}

export default App;
