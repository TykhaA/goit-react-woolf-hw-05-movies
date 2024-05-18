import { getMoviDetailseApi } from 'api/requests';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import './movie-details.scss';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    id &&
      getMoviDetailseApi(id)
        .then(data => {
          setDetails(data);
        })
        .catch(error => {
          setError(true);
        })
        .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {!error ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <section className="main-section movie-details">
              <Link to={location.state ?? `/`} className="go-back">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <title>4-Arrow Left</title>
                  <g id="_4-Arrow_Left" data-name="4-Arrow Left">
                    <path d="M32,15H3.41l8.29-8.29L10.29,5.29l-10,10a1,1,0,0,0,0,1.41l10,10,1.41-1.41L3.41,17H32Z" />
                  </g>
                </svg>
                Go back
              </Link>
              <div className="wrapper">
                <div className="movie-details__image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
                    alt=""
                  />
                </div>

                <div className="movie-details__descriptions">
                  <h1 className="title">
                    {details.original_title} (
                    {details.release_date && details.release_date.slice(0, 4)})
                  </h1>
                  <p>User score {Math.round(details.vote_average)}%</p>
                  <p className="sub-title">Overview</p>
                  <p>{details.overview}</p>
                  <p className="sub-title">Genres</p>
                  <p>
                    {details.genres && details.genres.map(el => `${el.name} `)}
                  </p>
                </div>
              </div>
              <div className="info">
                <p className="sub-title">Additional information</p>
                <ul className="info__list">
                  <li>
                    <Link to="cast">Cast</Link>
                  </li>
                  <li>
                    <Link to="review">Reviews</Link>
                  </li>
                </ul>
              </div>
              <Outlet></Outlet>
            </section>
          )}
        </>
      ) : (
        <p>Sorry, we didn't find anything based on your request.</p>
      )}
    </>
  );
};

export default MovieDetails;
