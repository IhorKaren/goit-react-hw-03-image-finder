import { Formik, Form, Field } from 'formik';

const SearchBar = ({ getImages }) => {
  return (
    <header>
      <Formik
        initialValues={{ imageSearch: '' }}
        onSubmit={(values, { resetForm }) => {
          getImages(values.imageSearch, 1);
          resetForm();
        }}
      >
        <Form>
          <Field name="imageSearch" type="text" />

          <button type="submit">
            <span className="button-label">Search</span>
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
