import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./../pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route component={NotFound}></Route> TO DO : Not Found Page */}
      </Switch>
    </BrowserRouter>
  );
}
