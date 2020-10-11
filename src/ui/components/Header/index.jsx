import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from 'ui/components/Button'
import Container from 'ui/components/Container'
import Logo from 'ui/components/Logo'
import { useDispatchUser, useUser } from 'features/auth/providers/UserProvider'
import { logout } from 'features/auth/actions'
import { Wrapper, Flex, Links } from './styles'

export default () => {
  const { dispatchUser: dispatch } = useDispatchUser()
  const { user } = useUser()
  return (
    <Wrapper>
      <Flex as={Container}>
        <Link to="/">
          <Logo />
        </Link>
        {user.isLoggedIn ? (
          <>
            {user.data.profil.name === 'Administrateur' && (
              <NavLink to="/utilisateur" size="large" variant="secondary">
                Utilisateur
              </NavLink>
            )}
            <NavLink to="/article" size="large" variant="secondary">
              Article
            </NavLink>
            <NavLink to="/client" size="large" variant="secondary">
              Client
            </NavLink>
            <Button
              type="button"
              onClick={() => logout(dispatch)}
              size="large"
              variant="secondary"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <NavLink activeClassName="active" exact to="/">
              Login
            </NavLink>
            {/* <Button as={NavLink} to="/signup" size="large" variant="primary">
                Sign up
              </Button> */}
          </>
        )}
      </Flex>
    </Wrapper>
  )
}
