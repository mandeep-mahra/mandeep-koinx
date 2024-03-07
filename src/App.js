import './App.css';
import Navbar from './components/navbar.js';
import DispPage from './components/dispPage.js';
import YouMayLikeList from './components/youMayLike.js';
import OptionList from './components/optionList.js';

function App() {
  return (
    <div className='min-vh-100 w-100 d-flex flex-column contain'>
      <Navbar/>
      <DispPage/>
      <OptionList/>
      <div className='mt-5 mb-5'>
        <YouMayLikeList heading={"You may also like"}/>
        <YouMayLikeList heading={"Trending Coins"}/>
      </div>
      
    </div>
  );
}

export default App;
