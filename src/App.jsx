import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Manga from './pages/Manga'
import User from './pages/User'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/read/:mangaId" element={<Manga/>} />
        <Route path="/login" element={<User/>} />
      </Routes>
    </>
  )
}

export default App
