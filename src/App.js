import Home from "./pages/home";
import Services from "./pages/services";
import Profile from "./pages/profile";
import Project from "./pages/Profile/project";
import Projects from "./pages/projects";
import About from "./pages/about";
import Signin from "./pages/signin";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/project" exact component={Project} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </>
  );
}

export default App;
