'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import MainContainer from './components/Main'

render (
  <Provider store={store}>
  <Router>
    <MainContainer/>
    </Router>
  </Provider>,
  document.getElementById('main')
)