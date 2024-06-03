import './ListDetail.scss'
import Card from './Card';
import Search from './Search';

function ListDetail() {
  const item = {
    name: 'Movie by Tom',
    description: 'This is the description',
    list: []
  }
  return (
    <div className="list-detail">
      <div className="list-detail__title">
        {item.name}
        {/* Welcome to <span className="list-detail__heading--title__name">Watchlists</span> */}
      </div>
      <div className='list-detail__desc'>About this watchlist</div>
      <div className='list-detail__desc-text'>{item.description}</div>
      {/* <div>
        <Search />
      </div>
      <div>
        <Card />
      </div> */}
    </div>
  );
}

export default ListDetail;
