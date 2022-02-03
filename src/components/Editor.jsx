import { Formik, Form, Field } from 'formik';
import { toast } from 'react-hot-toast';
import { addPublication } from 'services/publicationsApi';

export const Editor = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addPublication(values);
      toast.success('Публикация добавлена!');
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik initialValues={{ title: '', text: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field name="title" placeholder="Enter title" />
          <br />
          <Field name="text" placeholder="Enter text" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add publication'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
