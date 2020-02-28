import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

const FormSection = styled.section`
  margin: 2%;
`;


export default function CharacterList() {
  const [data, setData] = useState([])
  // const [results, setResults] = useState([data])

  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
        .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then(response => {
            console.log(response.data.results)
            // setData(response.data.results)
            const characterFilter = response.data.results.filter(character => 
              character.name.toLowerCase().includes(query.toLowerCase())
            );
            setData(characterFilter)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }, [query]);

    const handleInputChange = event => {
      setQuery(event.target.value);
    };

  return (
    <div className="character-page">
      <FormSection>
        <form className="search">
          <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search by name"
          autoComplete="off"
          />
        </form>
      </FormSection>
      <section className="character-list">
        <h2>Rick + lesser beings</h2>

        {/* <SearchForm  data={data}/> */}
        {data.map(data => {
          return(
            <div className='character-list'>
              <h3>Name: {data.name}</h3>
              <img src={data.image}></img>
              <Link to={`/character-list/${data.id}`}>
                <CharacterCard data={data} />
                </Link>
            </div>
          )
        })}
      </section>
    </div>
  );
}

