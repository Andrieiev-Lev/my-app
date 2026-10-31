import "./Footer.css"
import logo from "../../assets/logo.png"
import { IoLogoInstagram } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
function Footer() {
    return (
        <footer className="footer" >
            <img src={logo} alt="" className="footer-logo" />
            <div className="footer-address">
                <h3 className="footer-address-title">Address</h3>
                <h4 className="footer-address-place">Svobody str. 35 Kyiv Ukraine</h4>
            </div>
            <div className="footer-media">
                <h3 className="footer-media-title">Contact us</h3>
                <IoLogoInstagram className="footer-media-icon" />
                <MdFacebook className="footer-media-icon" />
                <MdOutlineWhatsapp className="footer-media-icon" />
            </div>
        </footer>
    )
}
export default Footer