import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../Component/Contact";
import TestHome from "./TestHome";

const AppRouter = () => {
  const [isLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            {/* 로그인이 되었을 때 */}
            <Route exact path="/">
              <TestHome />
            </Route>
          </>
        ) : (
          // 로그인이 안되었을 때
          <Route exact path="/">
            <Contact />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
