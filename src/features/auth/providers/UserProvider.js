import React, { useReducer, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import { BASE_URL } from 'config'
import UserReducer from 'features/auth/reducers/UserReducer'
import Loading from 'ui/components/Loading'

const UserContext = createContext()
const UserDispatchContext = createContext()

export default ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, {})

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')

        if (token) {
          dispatch({ type: 'LOADING_TRUE' })

          const { data } = await axios.post(`${BASE_URL}token/verify`, {
            token,
          })
          setAuthToken(token)
          dispatch({ type: 'SAVE_USER', payload: data?.user })

          window.localStorage.setItem('token', token)
          dispatch({ type: 'LOADING_FALSE' })
        }
      } catch (err) {
        window.localStorage.removeItem('token')
        dispatch({ type: 'LOADING_FALSE' })
      }
    }

    fetchUser()
  }, [])

  if (!user || user.loading) return <Loading />

  return (
    <UserDispatchContext.Provider
      value={{
        dispatchUser: dispatch,
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

export const useUser = () => useContext(UserContext)
export const useDispatchUser = () => useContext(UserDispatchContext)
