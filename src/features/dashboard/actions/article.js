import axios from 'axios'

export const fetchArticles = async () => {
  try {
    const data = await axios.get(`/article/findAll`)
    return data
  } catch (error) {
    alert(error.message)
  }
}

export const createArticle = async (article) => {
  console.log('article =====>', article)
  try {
    const data = await axios.post(`/article/add`, article)
    return data
  } catch (error) {
    alert(error)
  }
}

export const updateArticle = async (article) => {
  try {
    const data = await axios.put(`/article/update`, article)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteArticle = async (articleID) => {
  try {
    const data = await axios.delete(`/article/delete/${articleID}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
