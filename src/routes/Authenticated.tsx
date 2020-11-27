import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'helpers/history'
import Header from 'ui/components/Header'
import Dashboard from 'features/dashboard/modules/Dashboard'

const NotFound = () => <h2>404 Not Found</h2>

const Authenticated = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Authenticated
