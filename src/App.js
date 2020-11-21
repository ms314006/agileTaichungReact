import { Switch, Route } from 'react-router-dom';
import Counter from './views/Counter';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Counter} />
      <Route path="/home" component={Home}/>
    </Switch>
  );
}

export default App;
