import { useState, useEffect, useRef } from 'react';
import { useMountedState } from 'react-use';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export const Reader = ({ items }) => {
  const isMounted = useMountedState();
  const [index, setIndex] = useState(() => {
    const savedState = localStorage.getItem(LS_KEY);
    return savedState ? Number(savedState) : 0;
  });

  const changeIndex = value => {
    setIndex(prevIndex => prevIndex + value);
  };

  useEffect(() => {
    if (isMounted()) {
      localStorage.setItem(LS_KEY, index);
    }
  }, [index, isMounted]);

  const totalItems = items.length;
  const currentItem = items[index];

  return (
    <div>
      <Controls current={index + 1} total={totalItems} onChange={changeIndex} />
      <Progress current={index + 1} total={totalItems} />
      <Publication item={currentItem} />
    </div>
  );
};
