import UserData from "./components/UserData";
import Dropdown from "./components/Dropdown";
import "./App.css";
import {AppContextProvider} from "./contexts/AppContext";


function App() {
 

  return (
   <AppContextProvider>
    <div className="App">
        <div className="conte5nts">
          <UserData></UserData>
        </div>
        <div className="dropdown">
          <Dropdown />
        </div>
      </div>
   </AppContextProvider>
      
   
  );
}

export default App;
