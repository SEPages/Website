import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Components
import App from './src/App'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>),
  document.getElementById('app')
)
