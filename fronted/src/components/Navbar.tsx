import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div>
      <nav style={{ display: "flex", position: "fixed", top: "0px", right: "0px", left: "0px", width: "100vw", backgroundColor: "gray", justifyContent: "space-around" }}>
                <div>
                    <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "red" : "green" })}>Home Page</NavLink>
                </div>
                <div>
                    <NavLink to='/about' style={({ isActive }) => ({ color: isActive ? "red" : "green" })}>About</NavLink>
                </div>
                <div>
                    <NavLink to='/login' style={({ isActive }) => ({ color: isActive ? "red" : "green" })}>Login</NavLink>
                </div>
            </nav>
        </div>

  )
}

export default Navbar
