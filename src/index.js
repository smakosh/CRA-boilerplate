import React from 'react'
import ReactDOM from 'react-dom'
import App from 'routes/App'
import * as Sentry from '@sentry/browser'

if (process.env.REACT_APP_ENVIRONMENT !== 'development') {
  Sentry.init({
    dsn: 'xxx',
  })
}

ReactDOM.render(<App />, document.getElementById('root'))
