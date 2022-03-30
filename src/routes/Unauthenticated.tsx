import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from 'features/auth/modules/Login'
import Register from 'features/auth/modules/Register'
import Header from 'ui/components/Header'

const NotFound = () => <h2>404 Not Found</h2>

const Unauthenticated = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default Unauthenticated
