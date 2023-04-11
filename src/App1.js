
import './App.css';
import { Compo1 } from "./component/compo1";
import { Compo2 } from "./component/compo2";
import { Compo3 } from "./component/compo3";

function App1(){
    return(
        <div className="App">
            <Compo1 heading = "REGISTER HERE..."/>
            <Compo2/>
            <Compo3 button = "SUBMIT"/>
        </div>
    );
}

export default App1;