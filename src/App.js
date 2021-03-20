import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import LogIn from './Components/LogIn/LogIn';
import CopyData from './Components/copyData/CopyData';
function App() {
  return (
    <div>
      <Router>
        <div className="headerNav">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/destination">Destination</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/logIn">LogIn</Link>
            <Link exact to="/"></Link>
          </nav>
        </div>
        <Switch>
          <Route path='/home'><Home /></Route>
          <Route path='/destination'> <Destination /> </Route>
          <Route path='/blog'><Blog /></Route>
          <Route path='/contact'><Contact /><Contact /></Route>
          <Route path='/logIn'><LogIn /></Route>
          <Route exact path='/'><Home /></Route>
          <Route path='*'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
