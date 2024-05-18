import Home from 'pages/Home';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Movies = lazy(() => import('pages/Movies'));
const MainLayoute = lazy(() => import('layoutes/MainLayoute'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Сast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  return (
    <>
      <Suspense fallback={'loading'}>
        <Routes>
          <Route path="/" element={<MainLayoute />}>
            <Route index element={<Home />}></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="review" element={<Reviews />}></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
