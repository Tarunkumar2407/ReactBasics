import './App.css';
import ClassComponent from './Components/ClassComponent';
import ClickEvent from './Components/ClickEvent';
import FunctionalComp from './Components/FunctionalComp';

function App() {
  return (
    <div className="App">
      <FunctionalComp />
      <ClassComponent />
      <ClickEvent /> 
    </div>
  );
}

export default App;
