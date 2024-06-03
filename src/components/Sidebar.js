import './Sidebar.scss'
import Search from './Search';

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
        {
          rows.map(function (i) {
            return <div className='sidebar__list--item'>
            {i.name}
          </div>;
          })
        }
      </div>
    </div>
  );
}

export default Sidebar;
