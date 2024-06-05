import { setWatchList } from '../store/movieStore';
import './Card.scss'
import Watchlist from './Watchlist';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

function Card({movie, isDetail, id, movieIndex}) {
  function openSelection () {
    setShowSelectionModal(true)
  }

  const [showSelectionModal, setShowSelectionModal] = useState(false);

  const dispatch = useDispatch()
  function removeMovie () {
    dispatch(setWatchList({
      removeMovie: true,
      listIndex: id,
      movieIndex
    }))
  }


  const [selectedListIndex, setSelectedListIndex] = useState(-1);

  function handleListClick (index) {
    console.log('[in card emit]')
    setSelectedListIndex(index)
  }

  function handleSubmit () {
    setShowSelectionModal(false)
    dispatch(setWatchList({
      isAddMovie: true,
      listIndex: selectedListIndex,
      movie: movie
    }))
  }

  return (
    <div className="card">
      <div className="card__poster">
        <img src={movie.Poster} alt='poster' />
      </div>
      <div className='card__details'>
        {/* <div className='card__details--score'>⭐ {movie.Metascore} <div className='hundred-score'>&nbsp; / 100</div></div> */}
        {/* Score details are not coming in search API response */}
        <div className='card__details--name'>{movie.Title}</div>
        <span className='card__details--year'>({movie.Year})</span>
      </div>
      { isDetail ? <div className='card__remove' onClick={removeMovie}>X</div> : <div className='card__add' onClick={openSelection}>+</div>}
      { showSelectionModal &&
      <div className='card__modal'>
        <div className='card__modal--content'>
          <div className='close-icon' onClick={() => setShowSelectionModal(false)}>❌</div>
          <br></br>
          <div className='card__details--name'>{movie.Title}
          <span className='card__details--year'> ({movie.Year})</span></div>
          <br />
          Select your Watchlist
          <br />
          <br />
          <Watchlist isSelection="true" movie={movie} handleListClick={handleListClick} />
          <br />
          {selectedListIndex > -1 && <div className='card__submit' onClick={() => handleSubmit()}>
            Submit
          </div>
          }
        </div>
      </div>
      }
    </div>
  );
}

export default Card;
