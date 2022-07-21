
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
        <Route path= "/AaronFunes" exact component={Home}/>
        <Route path= "/AaronFunes/about" component={About}/>
        <Route path= "/AaronFunes/code" component={Code}/>
        <Route path= "/AaronFunes/music" component={Music}/>
      </Switch>
    </div>
    <div>
      <Media/>
    </div>
  </Router>
  );
}

export default App;


