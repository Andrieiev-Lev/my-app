import "./Forecast.css"
import { FaCloudSun } from "react-icons/fa6";
function Forecast() {
    return (
        <div className="forecast" >
            <h2 className="forecast-title">8-day forecast</h2>
            <div className="forecast-container">
                <h3 className="forecast-container-headline">Fri, Oct 13</h3>
                <div className="forecast-container-box">
                    <FaCloudSun className="forecast-container-box-icon" />
                    <h3 className="forecast-container-box-deg">23/14℃</h3>
                </div>
                <h3 className="forecast-container-deg">light rain</h3>
            </div>
        </div>
    )
}
export default Forecast