import CartWidget from "./cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar (){
    return(
        <nav className="navBar">
            <Link  to="/" className="logo" ><h2>ataraxia</h2></Link>
            <div className="navigation">
                <NavLink to="/category/top"></NavLink>
                <NavLink to="/category/pantalones">Product List</NavLink>
                <NavLink to="/category/calzado">Calzado</NavLink>
                <NavLink to="/category/accesorios">Accesorios</NavLink>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar