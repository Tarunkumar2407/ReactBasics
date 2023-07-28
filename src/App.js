import './App.css';
import ClassComponent from './Components/ClassComponent';
import ClickEvent from './Components/ClickEvent';
import FunctionalComp from './Components/FunctionalComp';
import State from './Components/State';

function App() {
  return (
    <div className="App">
      <FunctionalComp />
      <ClassComponent />
      <ClickEvent /> 
      <State />
    </div>
  );
}

export default App;
