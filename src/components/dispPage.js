import '../stylesheets/dispPage.css';
import GetStarted from './getStarted.js';
import Bitcoin from './bitcoin.js';
import Trending from './trending.js';
import { useEffect, useState } from 'react';

export default function DispPage(props){
    return(
        <>  
            <div className="d-flex flex-row">
                <div className=" leftdiv trend mt-5 ms-5 me-4 rounded-4">
                    <Bitcoin coin = {props.coin}/>
                </div>
                <div className="rightdiv">
                    <GetStarted/>
                    <Trending/>
                </div>
            </div>
        </>
    )
}