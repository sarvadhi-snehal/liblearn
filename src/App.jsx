import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Chartjs from "./pages/Chartjs";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";


function App() {
  const state = useSelector((state) => state.isLogin);
  return (

    <div className="App overflow-hidden">
      <Switch>
   
       {state && <Route path="/chart" component={Chartjs} />}
        <Route path="/" component={Home} />
      </Switch>
    </div>

 
  );
}

export default App;
