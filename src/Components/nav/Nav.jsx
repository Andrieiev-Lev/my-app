import user from "../../assets/user.png"
import logo from "../../assets/logo.png"
import "./Nav.css"
function Nav() {
    return (
        <nav className="nav" >
            <div className="nav-container">
                            <img className="nav-img" src={logo} alt="" />
            <ul className="nav-ul" >
                <li className="nav-ul-li">Who we are</li>
                <li className="nav-ul-li">Contacts</li>
                <li className="nav-ul-li">Menu</li>
            </ul>
            </div>
            <div className="nav-div">
                <button className="nav-div-button">Sign Up</button>
                <img src={user} alt="" className="nav-div-img" />
            </div>
        </nav>
    )
}
export default Nav