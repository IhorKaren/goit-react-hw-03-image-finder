import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormErrorMessage,
} from './Searchbar.styled';

const SearchBar = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    imageSearch: Yup.string().trim().required('Search field cannot be empty'),
  });

  return (
    <Searchbar>
      <Formik
        initialValues={{ imageSearch: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.imageSearch.trim());
          resetForm();
        }}
      >
        {({ dirty }) => (
          <SearchForm>
            <SearchFormErrorMessage name="imageSearch" component="div" />
            <SearchFormInput name="imageSearch" type="text" />
            <SearchFormButton type="submit" disabled={!dirty}>
              Search
            </SearchFormButton>
          </SearchForm>
        )}
      </Formik>
    </Searchbar>
  );
};

export default SearchBar;
