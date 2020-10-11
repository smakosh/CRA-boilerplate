import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export default (users, dispatch) => {
  const [loading, setLoading] = useState(true)

  const fetchUsers = useCallback(async () => {
    try {
      if (token) {
        const { data } = await axios.get(`/facturation/users`)

        await dispatch({ type: 'FETCH_USERS', payload: data?.users })

        setLoading(false)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }, [dispatch])

  useEffect(() => {
    if (!user.isLoggedIn) {
      fetchUsers()
    }
  }, [users])

  return {
    loading,
  }
}
