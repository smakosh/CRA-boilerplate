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
    const { data } = await axios.post(`${BASE_URL}auth/signin`, values)
    setAuthToken(data.token)

    await dispatchUser({ type: 'SAVE_USER', payload: data.user })

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
    await dispatch({ type: 'LOGOUT' })

    window.localStorage.removeItem('token')
    setAuthToken(false)

    history.push('/signup')
  } catch (err) {
    console.log(err)
  }
}
