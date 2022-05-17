import { createContext, useContext, useState } from 'react';

const formContext = createContext();

export const useForm = () => useContext(formContext);

export const FormProvider = ({ intialValues, onSubmit, children }) => {
  const [values, setValues] = useState(intialValues);

  const handleChange = e => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <formContext.Provider
      value={{
        values,
        onSubmit,
        onChange: handleChange,
      }}
    >
      {children}
    </formContext.Provider>
  );
};
