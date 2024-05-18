import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTg5ZWQ5NDMzN2E3NWQ1M2QzMTIxZTVkNWZhMzFjMyIsInN1YiI6IjY2NDM5NmI1MGE1OTdlNGJlNTM1ZDYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LSmVh4vrrPONmRJeYfoJ2KbQAc1rU6QmgVSMuws2FBA',
  },
});
