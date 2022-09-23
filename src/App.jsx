import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home, PropertyDetail, Search } from './pages'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <main className='container mx-auto px-1'>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/search/:query" element={<Search />} /> 
          <Route path="/property/:id" element={<PropertyDetail />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
