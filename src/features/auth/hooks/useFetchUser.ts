import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import storage from 'helpers/storage'
import { BASE_URL } from 'config'
import type { DispatchUser, StateUser } from 'features/auth/interfaces'

const useFetchUser = (user: StateUser, dispatch: DispatchUser) => {
  const [error, setError] = useState('')

  const fetchUser = useCallback(async () => {
    try {
      const token = storage.get('token')

      if (token) {
        dispatch({ type: 'LOADING_TRUE' })

        const { data } = await axios.post(`${BASE_URL}token/verify`, {
          token,
        })

        setAuthToken(token)
        dispatch({ type: 'SAVE_USER', payload: data?.user })

        storage.set('token', token)
        dispatch({ type: 'LOADING_FALSE' })
      }
    } catch (err) {
      storage.remove('token')
      setError(err.response.message)
      dispatch({ type: 'LOADING_FALSE' })
    }
  }, [dispatch])

  useEffect(() => {
    if (!user.isLoggedIn) {
      fetchUser()
    }
  }, [user.isLoggedIn, fetchUser])

  return { ...user, error }
}

export default useFetchUser
