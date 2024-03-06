import { useEffect, useState } from 'react';
import bitcoinlogo from '../resources/Bitcoin.webp';
import '../stylesheets/bitcoin.css';
import TradingChart from './tradingChart.js';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Bitcoin(){
    const [dispData, setDispData] = useState(
        {
            bitcoin: {
                usd: 0,
                usd_24h_change: 0,
                inr: 0,
                inr_24h_change: 0
            }
        }
    );
    useEffect(() => {
        const myHeaders = new Headers();

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true", requestOptions)
        .then((response) => response.json())
        .then((result) => setDispData(result))
        .catch((error) => console.error(error));

    }, [])
    return(
        <>
            <div className="bitcoinArea p-4 d-felx flex-coulmn">
                <div className='d-flex align-items-center'>
                    <img className = "logoBitcoin" src = {bitcoinlogo}/>
                    <span className='bitcoinText'>Bitcoin</span>
                    <span className='btcText'>BTC</span>
                    <button className='ms-4 btn btn-secondary btn-sm'>Rank #1</button>
                </div>
                <div className=' priceArea mt-4'>
                    <span className='dollorDisp'>
                        ${numberWithCommas(dispData.bitcoin.usd)}
                    </span>
                    {
                        (dispData.bitcoin.inr_24h_change > 0)?
                        <span className='text-success changePositive ms-5 rounded'>	
                            <span className='arrow mt-2'>&#9650;</span>
                            <span className='changeNum text-success changePositive'>
                                {dispData.bitcoin.usd_24h_change.toFixed(2)}%
                            </span>
                        </span>:
                        <span className='text-danger changeNegative ms-5 rounded'>
                            <span className='arrow mt-2'>&#9660;</span>
                            <span className='changeNum'>
                                {dispData.bitcoin.usd_24h_change.toFixed(2)}%
                            </span>
                        </span>
                    }
                    <span className='timeDuration ms-2'>(24H)</span>
                </div>
                <div className='inr'>
                    ₹ {numberWithCommas(dispData.bitcoin.inr)}
                </div>
                <hr className='mt-4 mb-4'/>
                <div className='trading '>
                    <TradingChart/>
                </div>
            </div>
        </>
    )
}