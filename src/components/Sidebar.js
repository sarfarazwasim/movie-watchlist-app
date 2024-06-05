import './Sidebar.scss'
import Watchlist from './Watchlist';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const id = useSelector((state) => state.movie.userId)
  const navigate = useNavigate()
  function redirectToHome () {
    navigate('/')
  }
  function handleLogout() {
    localStorage.removeItem('userId')
    navigate('/login')
  }
  return (
    <div className="sidebar">
      <h1 className="sidebar__heading" onClick={redirectToHome}>Watchlists</h1>
      <div>
        {/* <Search /> */}
      </div>
      <div className='sidebar__list'>
        My Lists
        <br></br>
        <br></br>
        <Watchlist />
      </div>
      <div className='sidebar__profile'>
      👤 &nbsp; {id}
        <div className='sidebar__profile--logout' onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
