import React, { useReducer, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import { BASE_URL } from 'config'
import UsersReducer from 'features/dashboard/reducers/Dashboard'
import Loading from 'ui/components/Loading'

const UsersContext = createContext()
const UsersDispatchContext = createContext()

export default ({ children }) => {
  const [users, dispatch] = useReducer(UsersReducer, {})

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (token) {
          dispatch({ type: 'LOADING_TRUE' })

          const { data } = await axios.get(`/facturation/users`)
          dispatch({ type: 'FETCH_USERS', payload: data?.users })

          dispatch({ type: 'LOADING_FALSE' })
        }
      } catch (err) {
        dispatch({ type: 'LOADING_FALSE' })
      }
    }

    fetchUser()
  }, [])

  if (!users || users.loading) return <Loading />

  return (
    <UsersDispatchContext.Provider
      value={{
        dispatchUsers: dispatch,
      }}
    >
      <UsersContext.Provider
        value={{
          user,
        }}
      >
        {children}
      </UsersContext.Provider>
    </UsersDispatchContext.Provider>
  )
}

export const useUsers = () => useContext(UsersContext)
export const useDispatchUsers = () => useContext(UsersDispatchContext)
