import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import { Switch, Route } from "react-router-dom";
import Nav from "./Container/Nav/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
}
