import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/home';
import NavBar from './components/navbar';
import About from './components/about';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
