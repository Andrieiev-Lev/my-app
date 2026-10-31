import "./Slider.css"
import Mountain from "../../assets/slider.png"
function Slider() {
    return(
        <div className="slider" >
            <h2 className="slider-title">Beautiful nature</h2>
            <img src={Mountain} alt="" className="slider-imgS" />
        </div>
    )
}
export default Slider