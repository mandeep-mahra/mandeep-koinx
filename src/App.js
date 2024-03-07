import './App.css';
import Navbar from './components/navbar.js';
import DispPage from './components/dispPage.js';
import YouMayLikeList from './components/youMayLike.js';
import OptionList from './components/optionList.js';
import GetStarted from './components/getStarted';
import Trending from './components/trending';
import Bitcoin from './components/bitcoin';
import { 
  PerformancePlaceholder, 
  BitcoinPlaceholder,
  SentimentPlaceholder,
  TokenomicsPlaceholder,
  TeamPlaceholder, 
} from './components/placeHolders.js'
import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

function Home() {
  const [width, setWindowDimensions] = useState(window.innerWidth);
  const { coin } = useParams();
  useEffect(() => {
      function handleResize() {
      setWindowDimensions(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      {(width > 900) ? 
        <div className='min-vh-100 w-100 d-flex flex-column contain'>
          <Navbar/>
          <DispPage coin = {coin}/>
          <OptionList/>
          <div className='bitcoinBox65 m-5 rounded-4'><PerformancePlaceholder/></div>
          <div className='bitcoinBox65 m-5 rounded-4'><BitcoinPlaceholder/></div>
          <div className='bitcoinBox65 m-5 rounded-4'><SentimentPlaceholder/></div>
          <div className='bitcoinBox65 m-5 rounded-4'><TokenomicsPlaceholder/></div>
          <div className='bitcoinBox65 m-5 rounded-4'><TeamPlaceholder/></div>
          <div className='mt-5 mb-5'>
            <YouMayLikeList heading={"You may also like"}/>
            <YouMayLikeList heading={"Trending Coins"}/>
          </div>
          
        </div>
      :
        <div className='min-vh-100 w-100 d-flex flex-column contain'>
          <Navbar/>
          <div className='bitcoinBox100 m-4'><Bitcoin coin = {coin}/></div>
          <OptionList/>
          <PerformancePlaceholder/>
          <BitcoinPlaceholder/>
          <SentimentPlaceholder/>
          <TokenomicsPlaceholder/>
          <TeamPlaceholder/>
          <div className='mt-5 mb-5'>
            <YouMayLikeList heading={"You may also like"}/>
            <YouMayLikeList heading={"Trending Coins"}/>
          </div>  
          <GetStarted/>
          <Trending/>
        </div>
      }
    </>
  );
}

function App(){
  return(
    <>
      <Routes>
        <Route path="/coins/:coin"
          element={<Home coinId={useParams().coin}/>}
        />
      </Routes>
    </>
  )
}

export default App;
