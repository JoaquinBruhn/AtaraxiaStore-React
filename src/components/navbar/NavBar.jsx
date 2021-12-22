import CartWidget from "./cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar (){
    return(
        <nav className="navBar">
            <Link  to="/" className="logo" ><h2>ataraxia</h2></Link>
            <div className="navigation">
                <NavLink to="/category/tops">Top</NavLink>
                <NavLink to="/category/pantalones">Pantalones</NavLink>
                <NavLink to="/category/calzado">Calzado</NavLink>
                <NavLink to="/category/accesorios">Accesorios</NavLink>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar