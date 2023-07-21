import IntroPage from "./Components/IntroPage";
import {NameState} from "./Context/NamesContext";
import "./App.css"

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
