import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
        .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then(response => {
            console.log(response.data.results)
            setData(response.data.results)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }, []);

  return (
    <section className="character-list">
      <h2>Rick + lesser beings</h2>
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
  );
}

