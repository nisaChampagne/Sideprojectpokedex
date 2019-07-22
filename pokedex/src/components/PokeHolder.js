import React, {useState, useEffect } from "react"
import PokeScreen from './PokeScreen'
// import PokeHeader from './PokeHeader'
import PokeStats from './PokeStats'
import axios from 'axios'


export default function PokeHolder() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState('1')

  useEffect(() => {
      console.log('Effect')
    axios.get(`https://pokeapi.co/api/v2/pokemon/${page}/`)
      .then (res => {
        const data = res.data;
        console.log('GUUD', res.data);      
            setData(data)
      })
      .catch(error => {
        console.log("Oopsie ", error);
      });

  },[page]);

   return (
    <div className='content-holder'>
      {data ? (
        <PokeScreen 
        name={data.name}
        // img={data.front_default}
        />
      ) : (
        <div> Oops one second </div>
      )}
      {data ? (
        <PokeStats 
          Order={data.order}
          Height={data.height}
          Weight={data.weight}
          base={data.base_experience}
        />
      ) : (
        <div> Oops one second </div>
      )}
      <button onClick={() => setPage('134')}></button>
      <button onClick={() => setPage('158')}></button>
      <button onClick={() => setPage('159')}></button>
      <button onClick={() => setPage('160')}></button>
      <button onClick={() => setPage('172')}></button>
      <button onClick={() => setPage('12')}></button>

    </div>
  );
}
