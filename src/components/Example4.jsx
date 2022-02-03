import { useRef, forwardRef } from 'react';

const SuperInput = forwardRef((props, ref) => {
  console.log(props);
  return <input type="text" ref={ref} />;
});

export const Example4 = () => {
  const inputRef = useRef();

  return (
    <div>
      <button onClick={() => inputRef.current.focus()}>
        Начать что-то делать
      </button>
      <SuperInput ref={inputRef} a={5} b={10} />
    </div>
  );
};
