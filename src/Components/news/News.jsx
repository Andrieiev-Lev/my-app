import "./News.css"
import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://newsapi.org/v2/";

function News() {
            const [newsApi, setNewsApi] = useState([])

    useEffect(() => {

        const getNewsAPi = async () => {

            try {
                const response = await axios.get("everything?q=tesla&apiKey=77c6de43884c4e079305c80f61bc33bd");
                console.log(response)
                setNewsApi(response.data.articles);
            } catch (error) {
                console.error('помилка', error)
            }
        }
        getNewsAPi()
    }, [])



    return (
        <div>
            {/* <ArticleList myApi={newsApi} /> */}
            <ul>
                {newsApi.map(function (article) {
                    return (
                        <li key={article.url}>
                            <img src={article.urlToImage} alt="" />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
export default News