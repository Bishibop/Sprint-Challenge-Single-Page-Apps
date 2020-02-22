import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from 'styled-components';

// Failed attempt to use Local Storage
// function useLocalStorage(key, initialValue) {
//   const[storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });
//
//   const setValue = value => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   return [storedValue, setValue];
// }


const StyledForm = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

function Search({ values, errors, touched }) {
  //const [search, setSearch] = useLocalStorage('search', values.search);

  return (
    <StyledForm>
      <Form>
        <Field type="text" name="search" />
        <button type="submit" >Search</button>
      </Form>
    </StyledForm>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues: ({ search }) => {
    return {
      search: search || ""
    };
  },

  handleSubmit: (values, bag) => {
    console.log('Heres whats going on in the search: ', values, bag);
    //setSearch(values.search);
    const searchResults = bag.props.characters.filter(character => {
      const characterInfo = Object.values(character).filter(value => {
        return typeof(value) === 'string';
      }).join(' ');
      //console.log('character info: ', characterInfo);
      return characterInfo.includes(values.search);
    });

    //console.log('search results', searchResults);
    bag.props.setSearchResults(searchResults);
  }
})(Search);

export default function SearchForm({ characters, setSearchResults }) {
 
  return (
    <section className="search-form">
      <FormikSearchForm
        characters={characters}
        setSearchResults={setSearchResults}
      />
    </section>
  );
}
