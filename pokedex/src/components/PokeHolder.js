import React, {useState, useEffect } from "react"
import PokeScreen from './PokeScreen'
import PokeHeader from './PokeHeader'
import PokeStats from './PokeStats'
import axios from 'axios'


export default function PokeHolder() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(`https://pokeapi.co/api/v2/pokemon/1/`)
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');

  useEffect(() => {
      console.log('Effect')
    axios.get(page)
      .then (res => {
        const data = res.data;
        console.log('GUUD', res.data);      
            res.data.next === null ? setNext("") : setNext(res.data.next);

            res.data.prev === null ? setPrev("") : setPrev(res.data.previous);

            setData(data)
      })
      .catch(error => {
        console.log("Oopsie ", error);
      });

  },[page]);

  const visitPrev = () => prev !== "" ? setPage(prev) : 0 ;
  const visitNext = () => next !== "" ? setPage(next) : 0;

   return (
    <div className='content-holder'>
      {data ? (
        <PokeScreen 
        name={data.name}
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
      <PokeHeader visitNext={visitNext} visitPrev={visitPrev} />
    </div>
  );
}
