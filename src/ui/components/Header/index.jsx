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
        <Links>
          {user.isLoggedIn ? (
            <Button
              type="button"
              onClick={() => logout(dispatch)}
              size="large"
              variant="secondary"
            >
              Logout
            </Button>
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
        </Links>
      </Flex>
    </Wrapper>
  )
}
