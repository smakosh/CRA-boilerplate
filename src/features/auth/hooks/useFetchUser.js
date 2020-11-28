import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import storage from 'helpers/storage'
import { BASE_URL } from 'config'

const useFetchUser = (user, dispatch) => {
  const [loading, setLoading] = useState(true)

  const fetchUser = useCallback(async () => {
    try {
      const token = storage.get('token')
      if (token) {
        const { data } = await axios.post(`${BASE_URL}token/verify`, { token })

        setAuthToken(token)
        await dispatch({ type: 'SAVE_USER', payload: data?.user })

        storage.set('token', token)
        setLoading(false)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }, [dispatch])

  useEffect(() => {
    if (!user.isLoggedIn) {
      fetchUser()
    }
  }, [user.isLoggedIn, fetchUser])

  return {
    loading,
    isLoggedIn: user.isLoggedIn,
  }
}

export default useFetchUser
