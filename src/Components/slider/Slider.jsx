import { useEffect, useState } from "react";
import "./Slider.css"
import axios from "axios";
axios.defaults.baseURL = " https://pixabay.com/api";
function Slider() {
    const [api, setApi] = useState([])

    useEffect(() => {
        const getAPi = async () => {
            try {
                const response = await axios.get("/?key=54652655-f0ef07fbcfc78ea73d9118d92");
                console.log(response)
                setApi(response.data.hits);
            } catch (error) {
                console.error('помилка', error)
            }
        }
        getAPi()
    }, [])



    return (
        <div>
            {/* <ArticleList myApi={api} /> */}
            <ul>
                {api.map(function (image) {
                    return (
                        <li key={image.id}>
                            <img src={image.webformatURL} alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
export default Slider