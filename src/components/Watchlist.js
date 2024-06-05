import './Watchlist.scss'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setWatchList } from '../store/movieStore'
import { useNavigate } from "react-router-dom";

function Watchlist({isSelection, movie, handleListClick}) {
  const id = useSelector((state) => state.movie.userId)
  const watchList = useSelector((state) => state.movie.watchList[id])
  const dispatch = useDispatch()
  const [watchlistName, setWatchlistName] = useState('');
  const handleNameChange = (event) => {
    setWatchlistName(event.target.value);
  };

  const [watchlistDescription, setWatchlistDescription] = useState('');
  const handleDescChange = (event) => {
    setWatchlistDescription(event.target.value);
  };

  const navigate = useNavigate()

  function handleCreate () {
    setShowCreateModal(false)
    dispatch(setWatchList({
      name: watchlistName,
      description: watchlistDescription
    }))
  }

  const [selectedList, setSelectedList] = useState(-1);

  function handleListSelection (index) {
    console.log('[log] hello', index)
    if (isSelection === 'true') {
      setSelectedList(index)
      handleListClick(index)
    } else {
      navigate(`/list/${index}`)
    }
  }

  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <div className="watchlist">
      {
        isSelection === 'true' && watchList && watchList.map(function (i, index) {
          return <div className={'watchlist__item ' + (selectedList === index ? 'selected-list' : '')} onClick= {() => {handleListSelection(index)}}>
          <span className='watchlist__item--initial'>{i.name[0]}</span> {i.name}
        </div>;
        })
      }
      {
        isSelection !== 'true' && watchList && watchList.map(function (i, index) {
          return <div className='watchlist__item' onClick= {() => {handleListSelection(index)}}>
          <span className='watchlist__item--initial'>{i.name[0]}</span> {i.name}
        </div>;
        })
      }
      <div className='watchlist__create' onClick={() => setShowCreateModal(true)}>
        Create Watchlist
      </div>
      { showCreateModal &&
      <div className='watchlist__modal'>
        <div className='watchlist__modal--content'>
          <div className='close-icon' onClick={() => setShowCreateModal(false)}>❌</div>
          <div className='modal-title'>Create Wishlist</div>
          <div className='input-name'>
            <div>Wishlist Name:</div>
            <input type='text' placeholder='Enter watchlist name'
            value={watchlistName} onChange={handleNameChange}/>
          </div>
          <div className='input-desc'>
            Watchlist Description:
            <textarea rows="6" placeholder='Enter watchlist description'
              value={watchlistDescription} onChange={handleDescChange}/>
          </div>
          { watchlistName.trim() && <div className='watchlist__create' onClick={() => handleCreate()}>
            Create
          </div>
          }
        </div>
      </div>
      }
    </div>
  );
}

export default Watchlist;
