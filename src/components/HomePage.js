import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FilmCard from './FilmCard';
import Banner from '../assets/topImage.png';

function HomePage() {
  const [searchText, setSearchText] = useState('');
  const films = useSelector((state) => state.logic);
  const filteredFilms = films.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  return (
    <div className="HomePage">
      <div className="BannerDiv">
        <img src={Banner} alt="Ghibli Logo" className="GhibliLogo" />
      </div>
      <div className="InputContainer">
        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search films..." className="SearchInput" />
      </div>
      <div className="FilmsContainer">
        {
          filteredFilms.map((film) => (
            <FilmCard
              key={film.filmKey}
              filmKey={film.filmKey}
              title={film.title}
              release={film.release}
              image={film.image}
            />
          ))
        }
      </div>
    </div>
  );
}

export default HomePage;
