import './Main.scss'
import Card from './Card';
import Search from './Search';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Main() {
  const movieList = useSelector((state) => state.movie.movieList)
  const dispatch = useDispatch()
  return (
    <div className="main">
      <div className="main__heading">
        <div className="main__heading--title">
          Welcome to <span className="main__heading--title__name">Watchlists</span>
        </div>
        Browse movies, add them to watchlists and share with friends
        <br></br>
        Just click + to add the movie
      </div>
      <div>
        <Search />
      </div>
      <div className='main__list'>
      {
          movieList.map(function (movie) {
            return <Card movie={movie} />
          })
        }
      </div>
    </div>
  );
}

export default Main;
