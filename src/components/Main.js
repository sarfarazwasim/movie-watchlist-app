import './Main.scss'
import Card from './Card';
import Search from './Search';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate()
  const id = useSelector((state) => state.movie.userId)
  useEffect(() => {
    if (!id) {
      navigate('/login')
    }
  });
  const movieList = useSelector((state) => state.movie.movieList)
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
