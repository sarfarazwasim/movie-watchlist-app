import './Sidebar.scss'
import Search from './Search';
import Watchlist from './Watchlist';

function Sidebar() {
  const item = {
    name: 'Movie by Tom',
    description: 'This is the description',
    list: []
  }
  const rows = [item, item, item, item]
  return (
    <div className="sidebar">
      <h1 className="sidebar__heading">Watchlists</h1>
      <div>
        {/* <Search /> */}
      </div>
      <div className='sidebar__list'>
        My Lists
        <br></br>
        <br></br>
        <Watchlist />
      </div>
    </div>
  );
}

export default Sidebar;
