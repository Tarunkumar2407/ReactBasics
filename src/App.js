import './App.css';
import ClassComponent from './Components/ClassComponent';
import ClickEvent from './Components/ClickEvent';
import FunctionalComp from './Components/FunctionalComp';
import State from './Components/State';
import StateInClass from './Components/StateInClass';

function App() {
  return (
    <div className="App">
      <FunctionalComp />
      <ClassComponent />
      <ClickEvent /> 
      <State />
      <StateInClass />
    </div>
  );
}

export default App;
