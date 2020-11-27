import React, { Suspense, lazy } from 'react'
import Spinner from 'react-spinkit'
import UserProvider from 'features/auth/providers/UserProvider'
import useUser from 'features/auth/hooks/useUser'
import GlobalStyle from 'ui/theme/global-style'
import { ThemeProvider } from 'styled-components'
import theme from 'ui/theme/theme'

const Authenticated = lazy(() => import('./Authenticated'))
const Unauthenticated = lazy(() => import('./Unauthenticated'))

const Routes = () => {
  const user = useUser()

  return user.isLoggedIn ? (
    <Suspense fallback={<Spinner name="wandering-cubes" color="aqua" />}>
      <Authenticated />
    </Suspense>
  ) : (
    <Suspense fallback={<Spinner name="wandering-cubes" color="black" />}>
      <Unauthenticated />
    </Suspense>
  )
}

const App = () => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <GlobalStyle />
      <Routes />
    </UserProvider>
  </ThemeProvider>
)

export default App
