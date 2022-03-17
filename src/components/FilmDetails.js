import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilmsApi } from '../redux/logic';

function FilmDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const films = useSelector((state) => state.logic);
  useEffect(() => {
    dispatch(getFilmsApi());
  }, []);

  const myFilm = films.filter((film) => film.filmKey === id);
  const currentFilm = myFilm[0];

  return (
    <div className="DetailPage">
      <div className="DetailCard">
        <div className="FilmBanner">
          <img src={currentFilm.banner} alt={`${currentFilm.name} banner`} className="FilmImage" />
        </div>
        <div className="InfoContainer">
          <div className="MovieInfo">
            <p>Film Title:</p>
            <p>{currentFilm.title}</p>
          </div>
          <div className="MovieInfo">
            <p>Original Title:</p>
            <p>{currentFilm.originalTitle}</p>
          </div>
          <div className="MovieInfo">
            <p>Romanised Title:</p>
            <p>{currentFilm.romanisedTitle}</p>
          </div>
          <div className="MovieInfo">
            <p>Director:</p>
            <p>{currentFilm.director}</p>
          </div>
          <div className="MovieInfo">
            <p>Producer:</p>
            <p>{currentFilm.producer}</p>
          </div>
          <div className="MovieInfo">
            <p>Release Year:</p>
            <p>{currentFilm.release}</p>
          </div>
          <div className="MovieInfo">
            <p>Rotten Tomatoes:</p>
            <p>{currentFilm.rtScore}</p>
          </div>
          <div className="MovieInfo">
            <p>Running Time:</p>
            <p>{`${currentFilm.runningTime} minutes`}</p>
          </div>
          <div className="MovieInfo Synopsis">
            <p>{`Synopsis:    ${currentFilm.description}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetails;
