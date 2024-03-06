import '../stylesheets/dispPage.css';
import GetStarted from './getStarted.js';
import Bitcoin from './bitcoin.js';
import Trending from './trending.js';

export default function DispPage(){
    return(
        <>
            <div className="d-flex flex-row">
                <div className=" leftdiv trend mt-5 ms-5 me-4 rounded-4">
                    <Bitcoin/>
                </div>
                <div className="rightdiv">
                    <GetStarted/>
                    <Trending/>
                </div>
            </div>
        </>
    )
}