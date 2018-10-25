import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import ExpinseDashboardPage from "./component/ExpinseDashboardPage";
import AddExpinsePage from "./component/AddExpinsePage";
import EditExpinsePage from "./component/EditExpinsePage";
import HelpPage from "./component/HelpPage";
import NotFoundPage from "./component/NotFoundPage";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={ExpinseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpinsePage} />
        <Route path="/edit/:id" component={EditExpinsePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
