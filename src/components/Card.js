import './Card.scss'

function Card({movie}) {
  return (
    <div className="card">
      <div className="card__poster">
        <img src={movie.Poster} alt='poster' />
      </div>
      <div className='card__details'>
        {/* <div className='card__details--score'>⭐ {movie.Metascore} <div className='hundred-score'>&nbsp; / 100</div></div> */}
        <div className='card__details--name'>{movie.Title}</div>
        <div className='card__details--year'>({movie.Year})</div>
      </div>
      <div className='card__add'>+</div>
    </div>
  );
}

export default Card;
