import { Link, useLocation } from 'react-router-dom';

export const PageB = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      PageB
      <hr />
      <Link to={location?.state?.from ?? '/page-a'}>Go Back</Link>
    </div>
  );
};
