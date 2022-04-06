import { Link } from 'react-router-dom';
export const NotFoundView = () => {
  return (
    <h1>
      404 Страница не найдена :(, перейдите на{' '}
      <Link to="/">домашнюю страницу</Link>
    </h1>
  );
};
