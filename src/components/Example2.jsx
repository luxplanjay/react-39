import { useRef, useEffect } from 'react';
import { differenceInMilliseconds } from 'date-fns';

export const Example2 = () => {
  const start = useRef(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      if (differenceInMilliseconds(new Date(), start.current) > 5000) {
        clearInterval(id);
      }
    }, 1000);
  }, []);

  return <div>Jquery is my jam</div>;
};
