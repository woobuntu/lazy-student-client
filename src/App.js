import React from "react";
import { Switch, Route } from "react-router-dom";
import { Translate, News, Private } from "./pages";
import Article from "./pages/Article";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Translate} />
      <Route path="/news" component={News} />
      <Route path="/article" component={Article} />
      <Route path="/mypage" component={Private} />
    </Switch>
  );
}

export default App;
