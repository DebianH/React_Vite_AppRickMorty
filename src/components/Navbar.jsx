import './Navbar.css';

const Navbar = ( {brand}) => {
    return (
        <nav className="navbar navbar-dark bg-dark superNavbar"
        >
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">
                    {brand}
                </a>
            </div>
        </nav>
    )
}

export default Navbar;