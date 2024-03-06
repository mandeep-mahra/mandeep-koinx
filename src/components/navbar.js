import logo from '../resources/logo.svg';
import "../stylesheets/navbar.css";

export default function Navbar(){
    return(
        <>
            <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light w-100 shadow">
                <a className="navbar-brand" href="#">   
                    <img className="logo" src={logo}></img>
                </a>
                <div className="navBarButtons d-flex flex-row gap-4">
                    <span className="d-flex align-items-center">Crypto Taxes</span>
                    <span className="d-flex align-items-center">Free Tools</span>
                    <span className="d-flex align-items-center">Resources Center</span>
                    <button className='btn btn-primary rounded'> Get Started</button>
                </div>
            </nav>
        </>
    )
}