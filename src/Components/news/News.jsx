import "./News.css"
import dog from "../../assets/dog.png"
function News() {
    return (
        <div className="news" >
            <h2 className="news-title">Interacting with our pets</h2>
            <div className="news-container">
                <div className="news-container-card">
                    <img src={dog} alt="" className="news-container-card-img" />
                    <h3 className="new-container-card-text">Rescue pups pose as ghosts in festive photo shoot</h3>
                </div>
            </div>
            <button className="news-btn">See more</button>
        </div>
    )
}
export default News