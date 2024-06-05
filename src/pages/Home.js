import './Home.scss'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className="home">
      <div className="home__sidebar">
        <Sidebar />
      </div>
      <div className="home__main">
        {/* <Main />
        <Login />
        <ListDetail /> */}
      </div>
    </div>
  );
}

export default Home;
