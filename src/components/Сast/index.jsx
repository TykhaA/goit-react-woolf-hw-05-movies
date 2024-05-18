import { getCastApi } from 'api/requests';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cast.scss';
import Loader from 'components/Loader';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    id &&
      getCastApi(id)
        .then(({ cast }) => {
          setCast(cast);
        })
        .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : cast.length > 0 ? (
        <ul className="cast">
          {cast.map(elem => {
            return (
              <li key={elem.id} className="cast__list">
                <div className="image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${elem.profile_path}`}
                    alt=""
                  />
                </div>
                <div className="wrapper">
                  <p className="title">{elem.name}</p>
                  <p className="description">
                    <span>Character:</span> {elem.character}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, there are no cast for this film</p>
      )}
    </>
  );
};

export default Cast;
