import { getReviewApi } from 'api/requests';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './review.scss';
import Loader from 'components/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    id &&
      getReviewApi(id)
        .then(({ results }) => {
          setReview(results);
        })
        .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : review.length > 0 ? (
        <ul className="review">
          {review.map(elem => {
            return (
              <li key={elem.id} className="review__list">
                <p className="title">{elem.author}</p>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: elem.content }}
                ></p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, there are no reviews for this film</p>
      )}
    </>
  );
};

export default Reviews;
