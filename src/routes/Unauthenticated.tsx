import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'helpers/history'
import Login from 'features/auth/modules/Login'
import Register from 'features/auth/modules/Register'
import Header from 'ui/components/Header'

const NotFound = () => <h2>404 Not Found</h2>

const Unauthenticated = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default Unauthenticated
