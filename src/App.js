import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './components/HomePage';
import FilmDetails from './components/FilmDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/studio_ghibli/" element={<HomePage />} />
        <Route path="/FilmDetails/:id" element={<FilmDetails />} />
      </Routes>
    </div>
  );
}

export default App;
