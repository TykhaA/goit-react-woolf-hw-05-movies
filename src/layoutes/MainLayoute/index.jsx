import React from 'react';
import Header from 'components/Header';

import { Outlet } from 'react-router-dom';

const MainLayoute = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default MainLayoute;
