import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PostCreate from "./components/PostCreate";
import PostSingle from "./components/PostSingle";
import { AllPostContextPorvider } from "./global/contexts/AllPostContext";

const App = () => {
  return (
    <div>
      <Router>
        <AllPostContextPorvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts/:id" component={PostSingle} />
            <Route path="/create-post" component={PostCreate} />
          </Switch>
        </AllPostContextPorvider>
      </Router>
    </div>
  );
};

export default App;
