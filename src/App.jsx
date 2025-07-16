
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NoticiasGenerales from './pages/NoticiasGeneralesPage'
import AstronomiaPage from './pages/AstronomiaPage'
import ClimaPage from './pages/ClimaPage'
import { BarraNavegacion } from './globalComponents/BarraNavegacion'
import { PiePagina } from './globalComponents/PiePagina'
import Layout from './globalComponents/Layout'

function App() {
  return (
   
    <Router > 
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/noticiasGenerales" element={<NoticiasGenerales />} />
         <Route path="/astronomia" element={<AstronomiaPage />} />
         <Route path="/clima" element={<ClimaPage />} />
      </Routes>
    
      </Layout>
    </Router>
  )
}

export default App