import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      <Router>
        <Route path='/login' component={Login} />
      </Router>
    </div>
  );
}

export default App;
