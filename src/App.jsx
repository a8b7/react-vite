import React, { useState, useLayoutEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "@/components/layout";
import Login from "@/pages/user/login";

function App() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log("执行一次");
  }, []);
  return (
    <Router >
      <Switch>
        <Route path="/user/login" exact component={Login} />
        <Layout />
      </Switch>
    </Router>
  );
}

export default App;
