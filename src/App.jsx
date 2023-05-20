import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar';
import IndividualMovieDisplay from './components/IndividualMovieDisplay';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<SearchBar />}/>
        <Route path='/individualmoviedetail/:imdb' element={<IndividualMovieDisplay />}/>
      </Routes>
    </>
  )
}

export default App
