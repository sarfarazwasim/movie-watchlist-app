import './Watchlist.scss'
import React, { useState } from 'react';

function Watchlist() {
  const [watchlistName, setWatchlistName] = useState('');
  const handleNameChange = (event) => {
    setWatchlistName(event.target.value);
  };

  const [watchlistDescription, setWatchlistDescription] = useState('');
  const handleDescChange = (event) => {
    setWatchlistDescription(event.target.value);
  };
  function handleCreate () {
    setShowCreateModal(false)
  }
  const item = {
    name: 'Movie by Tom',
    description: 'This is the description',
    list: []
  }
  const rows = [item, item, item, item]
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <div className="watchlist">
      {
        rows.map(function (i) {
          return <div className='watchlist__item'>
          {i.name}
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
          <div className='watchlist__create' onClick={() => handleCreate()}>
            Create
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default Watchlist;
