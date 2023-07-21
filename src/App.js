import IntroPage from "./Components/IntroPage";
import {NamesContext , NameState} from "./Context/NamesContext";

function App() {
  return (
    <div className="App">
      <NameState>
        <IntroPage> </IntroPage>
      </NameState>
    </div> 
  ); 
}

export default App;
