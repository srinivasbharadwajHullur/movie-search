import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieSearch from './components/MovieSearch';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar title="Movie Search"/>
      <Routes>
        <Route path='/moviesearch' element={<MovieSearch />}></Route>
      </Routes>
      <MovieSearch />
    </div>
  );
}

export default App;
