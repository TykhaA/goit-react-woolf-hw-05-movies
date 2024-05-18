import { instance } from './api';

export const getHomeListApi = async () => {
  const { data } = await instance.get(`3/trending/all/day?language=en-US`);
  return data;
};

export const getMovieApi = async value => {
  const { data } = await instance.get(
    `3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`
  );
  return data;
};
export const getMoviDetailseApi = async movieiId => {
  const { data } = await instance.get(`3/movie/${movieiId}?language=en-US`);
  return data;
};
export const getCastApi = async movieiId => {
  const { data } = await instance.get(
    `3/movie/${movieiId}/credits?language=en-US`
  );
  return data;
};
export const getReviewApi = async movieiId => {
  const { data } = await instance.get(
    `3/movie/${movieiId}/reviews?language=en-US&page=1`
  );
  return data;
};
