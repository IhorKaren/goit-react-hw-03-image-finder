import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SearchBar = ({ getImages }) => {
  const validationSchema = Yup.object().shape({
    imageSearch: Yup.string().trim().required('Please enter a search term'),
  });

  return (
    <header>
      <Formik
        initialValues={{ imageSearch: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          getImages(values.imageSearch.trim());
          resetForm();
        }}
      >
        {({ dirty }) => (
          <Form>
            <Field name="imageSearch" type="text" />
            <ErrorMessage name="imageSearch" component="div" />

            <button type="submit" disabled={!dirty}>
              <span className="button-label">Search</span>
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;
