import './ListDetail.scss'
import Card from './Card';
import Search from './Search';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';

function ListDetail() {
  const params = useParams();
  const id = useSelector((state) => state.movie.userId)
  const watchList = useSelector((state) => state.movie.watchList[id])
  const item = watchList[params.id]
  return (
    <div className="list-detail">
      <div className="list-detail__title">
        {item.name}
      </div>
      <div className='list-detail__desc'>About this watchlist</div>
      <div className='list-detail__desc-text'>{item.description}</div>
      <div>Movies:</div>
      <br></br>
      <div className='list-detail__list'>
        {
          item.movies.map(function (movie, index) {
            return <Card movie={movie} isDetail id={params.id} movieIndex={index} />
          })
        }
      </div>
    </div>
  );
}

export default ListDetail;
