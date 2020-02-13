import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm(props) {
 

  const handleChange = e => {
    props.setQuery(e.target.value);
  };
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          value={props.query}
          name="query"
          id="query"
          placeholder="search"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}