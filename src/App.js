import './App.css';
import Navbar from './components/navbar.js';
import DispPage from './components/dispPage.js';
import YouMayLikeList from './components/youMayLike.js'

function App() {
  return (
    <div className='min-vh-100 w-100 d-flex flex-column contain'>
      <Navbar/>
      <DispPage/>
      <YouMayLikeList/>
    </div>
  );
}

export default App;
