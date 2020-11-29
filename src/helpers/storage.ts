const set = (key: string, value: string) => window.localStorage.setItem(key, value)

const get = (key: string) => window.localStorage.getItem(key)

const remove = (key: string) => window.localStorage.removeItem(key)

const clear = () => window.localStorage.clear()

const storage = {
  set,
  get,
  remove,
  clear,
}

export default storage
