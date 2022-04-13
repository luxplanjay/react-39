import { useState } from 'react';

export const Form = ({ onSubmit, initialValue = '' }) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
