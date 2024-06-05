import './App.scss';
import Sidebar from './components/Sidebar';
// import Home from './pages/Home'
import store from './store/index';
import { Provider } from 'react-redux'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <div className="home">
        <div className="home__sidebar">
          <Sidebar />
        </div>
        <div className="home__main">
          <Outlet />
          {/* <Main />
          <Login />
          <ListDetail /> */}
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
