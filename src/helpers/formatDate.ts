const formatDate = (date: string) => {
  const year = date.split('/')[0]
  const month = date.split('/')[1]
  const day = date.split('/')[2]

  return new Date(`${year}-${month}-${day}`).toISOString()
}

export default formatDate
