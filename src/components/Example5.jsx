import { useState } from 'react';

const IconButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Кнопка-иконка
    </button>
  );
};

export const Example5 = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <IconButton onClick={() => setIsOpen(false)} />
      {isOpen && <div>Modal window</div>}
    </div>
  );
};
