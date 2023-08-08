import CardWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
          <div className="container-fluid"> 
        {/*Brand*/}
        <a href="#" className="navbar-brand"> Mercado de Vinos.</a>

        {/*Links*/}
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">¿Como comprar?</a>
            </li>
        </ul>

        {/*CardWidget*/}
        <CardWidget />
        </div>
        </nav>

    );
};

export default NavBar;
