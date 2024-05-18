import List from 'components/List';
import React, { useEffect, useState } from 'react';
import { getHomeListApi } from '../../api/requests';

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getHomeListApi().then(({ results }) => {
      setList(results);
    });
  }, []);
  return (
    <section className="main-section">
      <h1 className="title">Trending today</h1>
      <List list={list}></List>
    </section>
  );
};

export default Home;
