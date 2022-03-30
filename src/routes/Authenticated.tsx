import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'ui/components/Header'
import Dashboard from 'features/dashboard/modules/Dashboard'

const NotFound = () => <h2>404 Not Found</h2>

const Authenticated = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default Authenticated
