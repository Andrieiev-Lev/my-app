
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";

import "swiper/css";
import "./ImageSlider.css";

function ImageSlider({ images = [] }) {
    return (
        <div className="slider-container">

            <h2 className="slider-title">Beautiful nature</h2>

            <Swiper
                className="mySwiper"
                modules={[Mousewheel, FreeMode]}
                slidesPerView={3}
                spaceBetween={20}
                mousewheel={{
                    forceToAxis: true,
                }}
                freeMode={true}
                grabCursor={true}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img
                            src={image.webformatURL}
                            alt={image.tags}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default ImageSlider;