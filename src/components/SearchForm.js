import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";

function Search({ values, errors, touched }) {
  //const [search, setSearch] = useLocalStorage('search', values.search);

  return (
    <Form>
      <Field type="text" name="search" />
      <button type="submit" >Search</button>
    </Form>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues: ({ search }) => {
    return {
      search: search || ""
    };
  },

  handleSubmit: (values, bag) => {
    //console.log('Heres whats going on in the search: ', values, bag);
    const searchResults = bag.props.characters.filter(character => {
      const characterInfo = Object.values(character).filter(value => {
        return typeof(value) === 'string';
      }).join(' ');
      //console.log('character info: ', characterInfo);
      return characterInfo.includes(values.search);
    });

    //console.log('search results', searchResults);
    bag.props.setCharacters(searchResults);
  }
})(Search);

export default function SearchForm({ characters, setCharacters }) {
 
  return (
    <section className="search-form">
      <FormikSearchForm characters={characters} setCharacters={setCharacters}/>
    </section>
  );
}
