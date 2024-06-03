import './App.css';
import Home from './pages/Home'
import store from './store/index';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
        <Home />
      </div>
    </Provider>
  );
}

export default App;
