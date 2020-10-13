import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'helpers/history'
import Header from 'ui/components/Header'
import { useUser } from 'features/auth/providers/UserProvider'
import Article from 'features/dashboard/modules/article'
import Client from 'features/dashboard/modules/client'
import Utilisateur from 'features/dashboard/modules/utilisateur'

const NotFound = () => <h2>404 Not Found</h2>

export default () => {
  const { user } = useUser()
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={Utilisateur} />
        <Route path="/article" exact component={Article} />
        <Route path="/client" exact component={Client} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
