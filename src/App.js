import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/Not Found/NotFound";
import { Switch, Route } from "react-router-dom";
import Nav from "./Container/Nav/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component = {Login} />
        <Route path="/register" component = {Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
