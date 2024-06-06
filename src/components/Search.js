import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setMovieList } from '../store/movieStore'
import './Search.scss'

function Search() {
  const [searchTerm, setSearchTem] = useState('');
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSearchTem(event.target.value);
  };

  function fetchMovies () {
    const headers = {
      // 'Access-Control-Allow-Origin': '*',
      // "Content-Type": "application/json"
      }
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=62394e84`
    axios.get(url,  {headers})
    .then((res) => {
      if (res.data.Search) {
        dispatch(setMovieList(res.data.Search))
      } else {
        alert(res.data.Error)
      }
    })
  }
  return (
    <div className="search">
      <div className='search__icon'>🔍</div>
      <input type='text' className='search__input' placeholder='Enter text and click search to see list of movies'
       value={searchTerm} onChange={handleChange}/>
      <div className='search__button' onClick={() => fetchMovies()}>
        Search
      </div>
    </div>
  );
}

export default Search;
