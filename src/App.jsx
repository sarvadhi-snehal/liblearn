import React,{useState} from 'react'
import './App.css'
import {Switch, Route, Link } from 'react-router-dom';
import Chartjs from './pages/Chartjs';
import Login from './pages/Login'
import Home from './pages/Home'
import CarouselContainer from './pages/CarouselContainer'
function App() {
const [isLogin, setIsLogin] =useState(true);
const onSuccess = () => {
  setIsLogin(!isLogin);
};
  return (
    <div className="App">
      <Link to='/chart' >Chart</Link>
      <Link to='/carousel'>Carousel</Link>
        <Switch>
      <Route path="/chart" component={Chartjs} />
      <Route path="/home" component={Home} />
      <Route path="/carousel" component={CarouselContainer} />
     
      {isLogin ?  <Route path="/" component={Login} /> :  <Route path="/" component={Home} />}

    </Switch>
       </div>
  )
}

export default App
