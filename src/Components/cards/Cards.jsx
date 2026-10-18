import { FiSun } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxReload } from "react-icons/rx";
import "./Cards.css"
function Cards() {
    return (
        <div className="cards" >
            <div className="cards-box"> 
                <div className="cards-box-place" >
                    <p className="cards-box-place-city">Prague</p>
                    <p className="cards-box-place-country">Czech Republic</p>
                </div>
                <h3 className="cards-box-time" >14:00</h3>
                <div className="cards-box-forecast">
                    <button className="cards-forecast-box-hourly">Hourly forecast</button>
                    <button className="cards-forecast-box-weekly">Weekly forecast</button>
                </div>
                <div className="cards-box-date">
                    <h3 className="cards-box-date">13.10.2023</h3>
                    <span className="cards-box-line"></span>
                    <h3 className="cards-box-date">Friday</h3>
                </div>
                <FiSun className="weatherIcon" />
                <h3 className="cards-box-deg" >22℃</h3>
                <div className="cards-box-reaction">
                    <RxReload className="cards-box-reaction-reload" />
                    <FaRegHeart className="cards-box-reaction-like" />
                    <button className="cards-box-reaction-seeMore" >See more</button>
                    <RiDeleteBin5Line className="cards-box-reaction-delete" />
                </div>
            </div>
        </div>
    )
}
export default Cards