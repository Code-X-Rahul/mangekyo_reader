import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Anime from './pages/Anime'
import User from './pages/User'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/read/:animeId" element={<Anime/>} />
        <Route path="/login" element={<User/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
