import axios from 'axios'

export const fetchUtilisateurs = async () => {
  try {
    const data = await axios.get(`/utilisateur/findAll`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createUtilisateur = async (utilisateur) => {
  console.log('utilisateur =====>', utilisateur)
  try {
    const data = await axios.post(`/utilisateur/add`, utilisateur)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateUtilisateur = async (utilisateur) => {
  try {
    const data = await axios.put(`/utilisateur/update`, utilisateur)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteUtilisateur = async (utilisateurID) => {
  try {
    const data = await axios.delete(`/utilisateur/delete/${utilisateurID}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
