const GET_FILMS = 'GET_FILMS';

const FILMS_URL = 'https://ghibliapi.herokuapp.com/films';

const initialState = [];

export const getFilmsAction = (payload) => ({
  type: GET_FILMS,
  payload,
});

const logic = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return [...action.payload];
    default:
      return state;
  }
};

export default logic;

export const getFilmsApi = () => async (dispatch) => {
  const response = await fetch(FILMS_URL);
  const films = await response.json();
  const formatFilmData = films.map((e) => {
    const obj = {
      filmKey: e.id,
      title: e.title,
      originalTitle: e.original_title,
      romanisedTitle: e.original_title_romanised,
      image: e.image,
      banner: e.movie_banner,
      description: e.description,
      director: e.director,
      producer: e.producer,
      release: e.release_date,
      runningTime: e.running_time,
      rtScore: e.rt_score,
    };
    return obj;
  });
  dispatch(getFilmsAction(formatFilmData));
};
