import { IoSearchCircleSharp } from "react-icons/io5";
import buttonLogo from "../../assets/buttonLogo.png"
import "./Header.css"
function Header() {
    return(
        <header className="header" >
<h1 className="header-title">Weather dashboard</h1>
<div className="header-container">
    <h3 className="header-container-description">Create your personal list of favorite cities and always be aware of the weather.</h3>
    <span className="header-container-line"></span>
    <h3 className="header-container-date">October 2023 Friday, 13th</h3>
</div>
<form action="" className="header-form">
    <input type="text" placeholder="Search location..." className="header-form-enter" />
    <button className="header-form-search"><IoSearchCircleSharp className="icon" /></button>
</form>
        </header>
    )
}
export default Header