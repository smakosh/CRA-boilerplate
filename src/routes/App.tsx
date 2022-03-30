import { Suspense, lazy } from 'react'
import Spinner from 'react-spinkit'
import { ThemeProvider } from 'styled-components'
import UserProvider from 'features/auth/providers/UserProvider'
import useUser from 'features/auth/hooks/useUser'
import theme from 'ui/theme/theme'
import GlobalStyle from 'ui/theme/global-style'

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
