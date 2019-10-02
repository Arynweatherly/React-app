import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './Components/Kennel'

ReactDOM.render(
  <Router>
    <Kennel />
  </Router>
  , document.getElementById('root'))