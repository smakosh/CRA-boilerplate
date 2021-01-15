import history from 'helpers/history'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import storage from 'helpers/storage'
import { BASE_URL } from 'config'
import { DispatchUser } from 'features/auth/interfaces'

export type UserValues = {
  email: string
  password: string
  username?: string
}

type LoginSignupArgs = {
  dispatchUser: DispatchUser
  setFieldError: (key: string, value: string) => void
  setSubmitting: (arg: boolean) => void
  values: UserValues
}

export const login = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
}: LoginSignupArgs) => {
  try {
    const { data } = await axios.post(`${BASE_URL}auth/signin`, values)
    setAuthToken(data.token)

    dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    storage.set('token', data.token)
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
}: LoginSignupArgs) => {
  try {
    const { data } = await axios.post(`${BASE_URL}auth/signup`, values)
    setAuthToken(data.token)

    dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    storage.set('token', data.token)
    setSubmitting(false)

    history.push('/')
  } catch (err) {
    setFieldError('email', err?.response?.data)
  }
}

export const logout = async (dispatch: DispatchUser) => {
  try {
    dispatch({ type: 'LOADING_TRUE' })
    dispatch({ type: 'LOGOUT' })

    storage.remove('token')
    setAuthToken(false)

    dispatch({ type: 'LOADING_FALSE' })

    history.push('/')
  } catch (err) {
    dispatch({ type: 'LOADING_FALSE' })
    console.log(err)
  }
}
