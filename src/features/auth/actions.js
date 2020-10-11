import history from 'helpers/history'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import { BASE_URL } from 'config'

export const login = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
}) => {
  try {
		const { data } = await axios.post(`/login`, values)
    setAuthToken(data.token)

    await dispatchUser({ type: 'SAVE_USER', payload: data })

    window.localStorage.setItem('token', data.token)
    setSubmitting(false)

    history.push('/')
  } catch (err) {
    setFieldError('email', err?.response?.data)
  }
}

export const register = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
}) => {
  try {
    const { data } = await axios.post(`${BASE_URL}auth/signup`, values)
    setAuthToken(data.token)

    await dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    window.localStorage.setItem('token', data.token)
    setSubmitting(false)

    history.push('/')
  } catch (err) {
    setFieldError('email', err?.response?.data)
  }
}

export const logout = async (dispatch) => {
  try {
    await dispatch({ type: 'LOADING_TRUE' })
    await dispatch({ type: 'LOGOUT' })

    window.localStorage.removeItem('token')
    setAuthToken(false)

    await dispatch({ type: 'LOADING_FALSE' })

    history.push('/')
  } catch (err) {
    await dispatch({ type: 'LOADING_FALSE' })
    console.log(err)
  }
}
