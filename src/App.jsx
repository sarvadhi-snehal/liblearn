import React from 'react'
import './App.css'
import {Switch, Route, Link } from 'react-router-dom';
import Chartjs from './pages/Chartjs'
import CarouselContainer from './pages/CarouselContainer'
function App() {


  return (
    <div className="App">
      <Link to='/chart' >Chart</Link>
      <Link to='/carousel'>Carousel</Link>
    <Switch>
      <Route path="/chart" component={Chartjs} />

      <Route path="/carousel" component={CarouselContainer} />
    </Switch>
       </div>
  )
}

export default App
