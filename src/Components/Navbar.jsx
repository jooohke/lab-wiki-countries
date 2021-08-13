import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink exact to="/">WikiCountries</NavLink>
        </div>
    )
}

export default Navbar

