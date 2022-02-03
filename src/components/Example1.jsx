import { useState, useEffect, useCallback } from 'react';

export const Example1 = () => {
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (term === '') {
      return;
    }
    console.log(`Fetch data with page «${page}» and term «${term}»`);
  }, [page, term]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setTerm(e.currentTarget.elements.term.value);
          setPage(1);
        }}
      >
        <input type="text" name="term" />
        <button type="submit">Fetch</button>
      </form>
      <button onClick={() => setPage(page => page + 1)}>Fetch more</button>
    </div>
  );
};
