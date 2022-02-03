import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { useFetchItems } from 'hooks';

export const ListPage = () => {
  const { items, loading, error } = useFetchItems();

  return (
    <main>
      <h1>ListPage</h1>
      {loading && <Loader />}

      {!error && (
        <ol>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/list/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
};
