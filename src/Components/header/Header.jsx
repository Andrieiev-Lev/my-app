import "./Header.css"
import { IoSearchCircleSharp } from "react-icons/io5";
import axios from "axios";
import { useRef } from "react";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

function Header() {


    const inputText = useRef()
async function getWeather() {
 try {
            console.log(inputText)
        const response = await axios.get("/weather", {
            params: {
                q: `${inputText}`,
                appid: "/weather?q=The%20Hague&appid=f48ebf03930a412b390e24ed4d69d4b9&units=metric&lang=ru",
                units: "metric",
                lang: "ru"
            }
        });


        console.log(response.data);
    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}


    return(
        <header className="header" >
<h1 className="header-title">Weather dashboard</h1>
<div className="header-container">
    <h3 className="header-container-description">Create your personal list of favorite cities and always be aware of the weather.</h3>
    <span className="header-container-line"></span>
    <h3 className="header-container-date">October 2023 Friday, 13th</h3>
</div>
<form action="" className="header-form">
    <input ref={inputText} type="text" placeholder="Search location..." className="header-form-enter" />
    <button onClick={getWeather} className="header-form-search"><IoSearchCircleSharp className="icon" /></button>
</form>
 </header>
    )
}

export default Header