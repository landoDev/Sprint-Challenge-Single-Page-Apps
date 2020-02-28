import React, { useState } from "react";

export default function SearchForm({query, handleInputChange}) {
  console.log({query, handleInputChange})
  return (
    <section className="search-form">
      <form className="search">
        <input
        type="text"
        onChange={handleInputChange}
        value={query}
        name="name"
        tabIndex="0"
        className="prompt search-name"
        placeholder="search by name"
        autoComplete="off"
        />
      </form>
    </section>
  );
}
