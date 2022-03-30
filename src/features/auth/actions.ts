import { NavigateFunction } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import { ServerError } from 'types'
import { BASE_URL } from 'config'
import setAuthToken from 'helpers/setAuthToken'
import storage from 'helpers/storage'
import { DispatchUser } from 'features/auth/types'

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
  navigate: NavigateFunction
}

export const login = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
  navigate,
}: LoginSignupArgs) => {
  try {
    const { data } = await axios.post(`${BASE_URL}auth/signin`, values)
    setAuthToken(data.token)

    dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    storage.set('token', data.token)
    setSubmitting(false)

    navigate('/')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>
      if (serverError && serverError.response) {
        setFieldError(
          'email',
          serverError.response.data.message || 'Something went wrong'
        )
      }
    }
  }
}

export const register = async ({
  dispatchUser,
  setFieldError,
  setSubmitting,
  values,
  navigate,
}: LoginSignupArgs) => {
  try {
    const { data } = await axios.post(`${BASE_URL}auth/signup`, values)
    setAuthToken(data.token)

    dispatchUser({ type: 'SAVE_USER', payload: data?.user })

    storage.set('token', data.token)
    setSubmitting(false)

    navigate('/')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>
      if (serverError && serverError.response) {
        setFieldError(
          'email',
          serverError.response.data.message || 'Something went wrong'
        )
      }
    }
  }
}

export const logout = async (
  dispatch: DispatchUser,
  navigate: NavigateFunction
) => {
  try {
    dispatch({ type: 'LOADING_TRUE' })
    dispatch({ type: 'LOGOUT' })

    storage.remove('token')
    setAuthToken(false)

    dispatch({ type: 'LOADING_FALSE' })

    navigate('/')
  } catch (err) {
    dispatch({ type: 'LOADING_FALSE' })
    console.log(err)
  }
}
