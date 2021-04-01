
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomeGuest from './components/HomeGuest/HomeGuest'
import Navigation from './components/Navigation/Navigation'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import CreatePlace from './components/CreatePlace/CreatePlace'
import ContactUs from './components/ContactUs/ContactUs'

import HomeUser from './components/HomeUser/HomeUser'
import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import Weather from './components/Weather/Weather';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomeGuest}></Route>
        <Route exact path="/about-Us" component={AboutUs}></Route>
        <Route exact path="/contact-Us" component={ContactUs}></Route>

        <Route exact path="/places/weather/:city" component={Weather}></Route>
        
        <Route exact path="/add-place" component={CreatePlace }></Route>


        <Route exact path="/my-places" component={HomeUser}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Registration}></Route>





        {/* <Route exact path="/for-us" component ={ForUs}></Route> } */}



      </Switch>
      <Footer />

    </div>
  );
}

export default App;
