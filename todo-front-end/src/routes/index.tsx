import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from 'components/NotFound/NotFound'
import Home from 'pages/Home/Home'

const Router = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
