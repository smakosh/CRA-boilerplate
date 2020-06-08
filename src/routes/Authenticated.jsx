import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'helpers/history'
import Header from 'components/theme/Header'
import Dashboard from 'features/dashboard/Dashboard'

const NotFound = () => <h2>404 Not Found</h2>

export default ({ dispatch }) => (
  <Router history={history}>
    <Header isLoggedIn dispatch={dispatch} />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
