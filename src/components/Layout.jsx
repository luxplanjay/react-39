import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Reader</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
