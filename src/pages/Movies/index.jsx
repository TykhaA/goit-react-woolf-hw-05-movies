import React, { useEffect, useState } from 'react';
import { getMovieApi } from 'api/requests';
import List from 'components/List';
import './searchForm.scss';
import { useSearchParams } from 'react-router-dom';

const ItemPage = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const [value, setValue] = useState('');

  useEffect(() => {
    const search = searchParam.get('search');
    if (search) {
      getMovieList(search);
      setValue(search);
    }
  }, [searchParam]);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.elements.value.value;
    setSearchParam({ search: searchValue });
    getMovieList(searchValue);
    //e.target.reset();
  };

  const getMovieList = value => {
    getMovieApi(value).then(data => {
      setError(false);
      data.results.length > 0 ? setList(data.results) : setError(true);
    });
  };

  return (
    <section className="main-section">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="searchForm__input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="value"
          value={value}
        />
        <button type="submit" className="searchForm__button">
          <span className="searchForm_button_label">Search</span>
        </button>
      </form>
      <List list={list}></List>
      {error && <p>Sorry, we didn't find anything based on your request.</p>}
    </section>
  );
};

export default ItemPage;
