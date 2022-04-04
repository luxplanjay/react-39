import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/authors">Авторы</Link>
      <Link to="/books">Книги</Link>
    </nav>
  );
};
