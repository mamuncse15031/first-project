import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import './components/Navbar.css';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/test' component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
