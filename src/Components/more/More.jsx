import "./More.css"
import { FaTemperatureHigh } from "react-icons/fa";
function More() {
    return (
        <div className="more-container" >
                <div className="more-container-box">
                    <h3 className="more-container-box-headline">Feels like</h3>
                    <h3 className="more-container-box-deg">29.2℃</h3>
                    <FaTemperatureHigh className="more-container-box-icon" />
                </div>
        </div>
    )
}
export default More