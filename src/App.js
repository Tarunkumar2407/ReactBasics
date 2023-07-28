import './App.css';
import ClassComponent from './Components/ClassComponent';
import ClickEvent from './Components/ClickEvent';
import FunctionalComp from './Components/FunctionalComp';
import PropsInFunctional from './Components/PropsInFunctional';
import State from './Components/State';
import StateInClass from './Components/StateInClass';

function App() {
  return (
    <div className="App">
      {/* <FunctionalComp />
      <ClassComponent />
      <ClickEvent /> 
      <State />
      <StateInClass /> */}
      <PropsInFunctional />
    </div>
  );
}

export default App;
