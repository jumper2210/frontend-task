import React, { Suspense } from "react";
import "./App.css";
import SearchPage from "./containers/SearchPage/SearchPage";
import { Route, Switch, withRouter } from "react-router-dom";

const ResultsPage = React.lazy(() => {
  return import("./containers/ResultsPage/ResultsPage");
});

let routes = (
  <Switch>
    <Route path="/results" render={(props) => <ResultsPage {...props} />} />
    <Route exact path="/" component={SearchPage} />
  </Switch>
);
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </div>
  );
}

export default withRouter(App);
