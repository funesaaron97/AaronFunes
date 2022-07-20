
import './App.css';
import Menu from './menu';
import Home from './home';
import About from './about';
import Code from './code';
import Music from './music';
import Media from './medialinks';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div>
      <Menu/>
      <Switch>
        <Route path= "/" exact component={Home}/>
        <Route path= "/about" component={About}/>
        <Route path= "/code" component={Code}/>
        <Route path= "/music" component={Music}/>
      </Switch>
    </div>
    <div>
      <Media/>
    </div>
  </Router>
  );
}

export default App;

