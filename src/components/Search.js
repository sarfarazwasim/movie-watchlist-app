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
    axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=62394e84`)
    .then((res) => {
      dispatch(setMovieList(res.data.Search))
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
