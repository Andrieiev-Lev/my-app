import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import "./Slider.css"
import axios from "axios";
axios.defaults.baseURL = " https://pixabay.com/api";
function Slider() {
    const [api, setApi] = useState([])

    useEffect(() => {
        const getAPi = async () => {
            try {
                const response = await axios.get("/?key=54652655-f0ef07fbcfc78ea73d9118d92");
                // console.log(response)
                setApi(response.data.hits);
            } catch (error) {
                console.error('помилка', error)
            }
        }
        getAPi()
    }, [])



    return (
        <div  >
            <ImageSlider images={api} />
            {/* <ArticleList myApi={api} /> */}
        </div>
    );
}

export default Slider