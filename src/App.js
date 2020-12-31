import './App.css';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
        <div>
          <h2>Analectica - Frontend</h2>
          <nav>
          <ul >
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
