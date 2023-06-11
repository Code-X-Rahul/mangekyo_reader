import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </>
  )
}

export default App
