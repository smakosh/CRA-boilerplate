import history from 'helpers/history'
import axios from 'axios'
import setAuthToken from 'helpers/setAuthToken'
import { BASE_URL } from 'config'

export const createUtilisateur = async ({
  dispatchUtilisateur,
  setFieldError,
  setSubmitting,
  values,
}) => {
  try {
    const { data } = await axios.post(`/login`, values)
    setAuthToken(data.token)
  } catch (error) {
    setFieldError('email', err?.response?.data)
  }
}
