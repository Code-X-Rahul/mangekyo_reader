import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import Anime from './pages/Anime'
import User from './pages/User'
import Dashboard from './pages/Dashboard'
import Watch from './pages/Watch'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/anime/:animeId" element={<Anime />} />
        <Route path="/anime/:animeId/watch/:episodeId" element={<Watch />} />
      </Routes>
    </>
  )
}

export default App
