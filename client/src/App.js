
import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/Home/Home.js'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component ={Home}></Route>
    </div>
  );
}

export default App;
