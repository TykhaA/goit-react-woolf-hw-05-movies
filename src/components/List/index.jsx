import './list.scss';
import '../style.scss';
import { Link, useLocation } from 'react-router-dom';

const List = ({ list }) => {
  const location = useLocation();

  return (
    <ul className="list">
      {list.map(elem => {
        return (
          <li className="list__item" key={elem.id}>
            <Link
              to={`/movies/${elem.id}`}
              state={location}
              className="home-list__link"
            >
              {elem.title ?? elem.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
