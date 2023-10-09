import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);
  console.log(user);
    const navLinks=<>
    <li><NavLink
    exact="true"
     activeclassname="active" to="/">Home</NavLink></li>
    <li><NavLink activeclassname="active" to="/logIn">Login</NavLink></li>
    <li><NavLink activeclassname="active" to="/register">Registration</NavLink></li>
    <li><NavLink activeclassname="active" to="/services">Services</NavLink></li>
    </>
    const handleLogOut=()=>
    {
      logOut()
      .then(res=>{
        console.log(res);
      })
      .catch(error=>{
        console.log(error.message);
      })
    }
    return (
        <div className="navbar bg-cyan-100">
  <div className="navbar-start">
    <div className="dropdown">
        
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <h2 className="text-2xl italic 
    font-semibold
    text-cyan-600 ">Education & Training Event Management</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && <div className="flex">
        <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full mr-2"/>
        <span className="text-xl mr-2 font-semibold">{user.displayName}</span>
      </div>
    }
    {
      user? <button to="/"
      onClick={handleLogOut}
       className="btn btn-outline btn-primary">

       LogOut</button>:
      <Link to="/logIn" className="btn btn-outline btn-primary">LogIn</Link>
    }
    
  </div>
</div>
    );
};

export default Navbar;