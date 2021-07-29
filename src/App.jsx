import React, { useEffect } from "react";
import "./App.scss";
import Home from "./pages/Home";
import Chartjs from "./pages/Chartjs";
import { useSelector } from "react-redux";
import { Switch, Route, useParams} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import 'bootstrap/dist/js/bootstrap'
function App() {
  const state = useSelector((state) => state.isDark);

  return (
    <div className={`App overflow-hidden ${ state && 'dark-mode'}`}>

      <Switch>
      <Route path="/chart" component={Chartjs} exact />
      <Route path="/" component={Home} exact />

      <Route path="*" component={ErrorPage} />

      </Switch>
    </div>
  );
}
export default App;