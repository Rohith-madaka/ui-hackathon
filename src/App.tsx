import AppBar from "./layout/AppBar.tsx";
import SideBar from "./layout/SideBar.tsx";
import Routes from './layout/Routes.tsx';

import './App.scss'

function App() {
  return (
    <div className="App" bs-data-theme='dark'>
      <AppBar />
      <SideBar />
      <div className='main-pannel'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
