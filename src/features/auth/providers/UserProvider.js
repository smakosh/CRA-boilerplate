import React, { useReducer, createContext, useEffect } from 'react'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import { BASE_URL } from 'config'
import UserReducer from 'features/auth/reducers/UserReducer'
import Loading from 'ui/components/Loading'

export const UserContext = createContext()
export const UserDispatchContext = createContext()

const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(UserReducer, {})

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')

        if (token) {
          dispatchUser({ type: 'LOADING_TRUE' })

          const { data } = await axios.post(`${BASE_URL}token/verify`, {
            token,
          })
          setAuthToken(token)
          dispatchUser({ type: 'SAVE_USER', payload: data?.user })

          window.localStorage.setItem('token', token)
          dispatchUser({ type: 'LOADING_FALSE' })
        }
      } catch (err) {
        window.localStorage.removeItem('token')
        dispatchUser({ type: 'LOADING_FALSE' })
      }
    }

    fetchUser()
  }, [])

  if (!user || user.loading) return <Loading />

  return (
    <UserDispatchContext.Provider
      value={{
        dispatchUser,
      }}
    >
      <UserContext.Provider
        value={{
          user,
        }}
      >
        {children}
      </UserContext.Provider>
    </UserDispatchContext.Provider>
  )
}

export default UserProvider
