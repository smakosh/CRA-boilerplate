import axios from 'axios'

export const fetchClients = async () => {
  try {
    const data = await axios.get(`/client/findAll`)
    return data
  } catch (error) {
    alert(error.message)
  }
}

export const createClient = async (client) => {
  try {
    const data = await axios.post(`/client/add`, client)
    return data
  } catch (error) {
    alert(error)
  }
}

export const updateClient = async (client) => {
  try {
    const data = await axios.put(`/client/update`, client)
    return data
  } catch (error) {
    alert(error)
  }
}

export const deleteClient = async (clientID) => {
  try {
    const data = await axios.delete(`/client/delete/${clientID}`)
    return data
  } catch (error) {
    alert(error)
  }
}
