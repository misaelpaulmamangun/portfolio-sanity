import "./App.css";
import "react-skeleton-css/styles/skeleton.2.0.4.css";
import "react-skeleton-css/styles/normalize.3.0.2.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Projects} path="/projects" />
        <Route component={Project} path="/post/:slug" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
