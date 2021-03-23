
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomeGuest from './components/HomeGuest/HomeGuest'
import Navigation from './components/Navigation/Navigation'
import AboutUs from './components/AboutUs/AboutUs'
import ForUs from './components/ForUs/ForUs'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navigation />
    <Switch>
  <Route exact path="/about-Us" component ={AboutUs}></Route>
    {/* <Route exact path="/" component ={HomeGuest}></Route>

    <Route exact path="/for-us" component ={ForUs}></Route> */}



    </Switch>
    <Footer/>
     
    </div>
  );
}

export default App;
