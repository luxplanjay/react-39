import { FormProvider, useForm } from 'context/formContext';

export const Example1 = () => {
  return (
    <FormProvider
      intialValues={{ username: 'mango', password: '' }}
      onSubmit={values => {
        console.log('Values in onSubmit', values);
      }}
    >
      <Form>
        <Field name="username" />
        <Field name="password" type="password" />
        <button type="submit">submit</button>
      </Form>
    </FormProvider>
  );
};

const Form = ({ children }) => {
  const ctx = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    ctx.onSubmit(5);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

const Field = ({ type = 'text', name }) => {
  const ctx = useForm();
  return (
    <input
      type={type}
      name={name}
      value={ctx.values[name]}
      onChange={ctx.onChange}
    />
  );
};
