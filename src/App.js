//import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/privateroute/priv';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signin} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
