import React from "react";
import "../style.css";
import Slider from "react-slick";
import promo1 from "../../../assets/gambar1.jpg"
import promo2 from "../../../assets/gambar2.jpg"
import promo3 from "../../../assets/gambar3.jpg"

export default function Information() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='card-content_x g-bdr-round d-flex justify-content-center px-2 flex-column'>
      <h5 className='title-chart ml-3'>Promo Hari Ini</h5>
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
          <img src={promo1} alt="Promo 1 - Description" style={{ width: '700px', height: '185px' }} />
        </div>
        <div className="d-flex justify-content-center">
          <img src={promo2} alt="Promo 2 - Description" style={{ width: '700px', height: '200px' }}/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={promo3} alt="Promo 3 - Description" style={{ width: '700px', height: '200px' }}/>
        </div>
      </Slider>
    </div>
  );
}