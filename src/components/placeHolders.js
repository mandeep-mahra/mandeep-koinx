import "../stylesheets/placeHolders.css";
import info from '../resources/infoLogo.png'

function PerformancePlaceholder(){
    return(
        <>
        </>
    )
}

function SentimentPlaceholder(){
    return(
        <>
            <div className="rounded-4 bitcoinBox mt-4 ms-5 me-5 p-4">
                <h2>Sentiment</h2>
                <h4 className="text-secondary">
                    Key Events
                    <img className="infoLogo" src = {info}/>
                </h4>
            </div>
        </>
    )
}

function BitcoinPlaceholder(){
    return(
        <div className="rounded-4 bitcoinBox ms-5 me-5 p-4">
            <h2>About Bitcoin</h2>
            <h4 className="mt-4">What is Bitcoin?</h4>
            <p>
                Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as 
                money and a form of payment outside the control of any one person, group, 
                or entity, thus removing the need for third-party involvement in financial transactions. 
                It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.
                Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.
            </p>
            <hr className="mt-4 mb-4"/>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
            </p>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
                qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda 
                est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et 
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                svoluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
        </div>
    )
}

function TokenomicsPlaceholder(){
    return(
        <>
            <div className="mt-4 rounded-4 bitcoinBox ms-5 me-5 p-4">
                <h2>Tokenomics</h2>
                <h4 className="mt-4">Initial Distribution</h4>
                <div>
                    chart here
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.
                </p>
            </div>
        </>
    )
}
function TeamPlaceholder(){
    return(
        <>
        </>
    )
}
export {
    PerformancePlaceholder,
    BitcoinPlaceholder,
    TokenomicsPlaceholder,
    TeamPlaceholder,
    SentimentPlaceholder
};