import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from 'components/common/Button'
import Container from 'components/common/Container'
import { logout } from 'features/auth/actions'
import Logo from 'components/common/Logo'
import { Wrapper, Flex, Links } from './styles'

export default ({ isLoggedIn, dispatch }) => (
  <Wrapper>
    <Flex as={Container}>
      <Link to="/">
        <Logo />
      </Link>
      <Links>
        {isLoggedIn ? (
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
            <Button as={NavLink} to="/signup" size="large" variant="primary">
              Sign up
            </Button>
          </>
        )}
      </Links>
    </Flex>
  </Wrapper>
)
