import { Carousel } from 'bootstrap';
import { useState, useEffect } from 'react';
import '../stylesheets/youMayLike.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function YouMayLikeList( props ){
    const [trendingData, setTrendingData] = useState({coins : []});
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://api.coingecko.com/api/v3/search/trending", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(props.heading[0] != 'T')
                result.coins.reverse();
            setTrendingData(result)
        })
        .catch((error) => console.error(error));
    }, [])
    return (
        <div data-ride="carousel" className = "likeList rounded p-4 carousel">
            <span className="heading">{props.heading}</span>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
            >
            {
                trendingData.coins.map((coin) => (
                    <SwiperSlide>
                    <div className='carousel-item rounded likeListItem d-flex flex-column'>
                        <div className='listItemInfo d-flex flex-row'>
                            {console.log(coin)}
                            <img className="coinLogo" src = {coin.item.small}/>
                            <span className='ms-2'>
                                {coin.item.name}
                            </span>
                            
                            {
                                (coin.item.data.price_change_percentage_24h.usd > 0)?
                                <div className='ms-3 changeTrending text-success changePositive rounded'>	
                                    <span className='arrow mt-2'>&#9650;</span>
                                    <span className='changeNum'>
                                        {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                    </span>
                                </div>:
                                <div className='ms-3 changeTrending text-danger changeNegative rounded'>
                                    <span className='arrow'>&#9660;</span>
                                    <span className='changeNum'>
                                        {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                    </span>
                                </div>
                            }
                        </div>
                        <img className = "m-3" src = {coin.item.data.sparkline}/>
                    </div>
                    </SwiperSlide>            
                ))
            }
            </Swiper>
        </div>
    )
}