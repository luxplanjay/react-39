import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <ul style={{ display: 'flex', gap: 12, padding: 12 }}>
        <li>
          <Link to="/">Reader</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/ls-reader">LSReader</Link>
        </li>
        <li>
          <Link to="/player">Player</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
