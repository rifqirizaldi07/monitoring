import React from "react";
import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import promo1 from "../../../assets/gambar1.jpg"
import promo2 from "../../../assets/gambar2.jpg"
import promo3 from "../../../assets/gambar3.jpg"

export default function Information() {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
    cssEase: "linear"
  };

  return (
    <div className='card-content_x g-bdr-round d-flex justify-content-center px-2 flex-column'>
      <h5 className='title-chart ml-3'>Promo Hari Ini</h5>
       <Slider {...settings}>
        <div className="d-flex justify-content-center">
          <img src={promo1} alt="Promo 1 - Description" style={{ width: '700px', height: '185px', borderRadius: '10px' }} />
        </div>
        <div className="d-flex justify-content-center">
          <img src={promo2} alt="Promo 2 - Description" style={{ width: '700px', height: '185px', borderRadius: '10px' }}/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={promo3} alt="Promo 3 - Description" style={{ width: '700px', height: '185px', borderRadius: '10px' }}/>
        </div>
      </Slider>
    </div>
  );
}