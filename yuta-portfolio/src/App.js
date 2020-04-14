import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
            <Menu />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/timeline" component={Timeline} />
                <Route path="/contact" component={Contact} />
              </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
