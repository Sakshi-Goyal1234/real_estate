import './Residencies.css';
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide ,useSwiper} from 'swiper/react';
import 'swiper/swiper-bundle.css';
 import { slidersetting } from '../../utils/common.js';
export default function Residencies()
{

    return(
        <>
        <div className="r-wrapper">
            <div className="r-container">
                <div className="r-head">
                    <span className="yellow">Best Choices</span>
                    <br/>
                    <span className="blue">Popular Residencies</span>
                </div>

                <Swiper{...slidersetting} className="swiper">
                     
                        <SliderButtons/>
                     {   data.map((card,i)=>(
                        <SwiperSlide key={i}>
                          <div className="r-card">
                            <img src={card.image}></img>
                            <span className="r-price">
                                <span style={{color:"orange"}}>$</span><span style={{color:"black"}}>{card.price}</span>
                            </span>
                            <span className="primary_text">{card.name}</span>
                            <span className="secondary_text">{card.detail}</span>
                          </div>
                        </SwiperSlide>
                        ))                 }
                </Swiper>
            </div>
        </div>
        </>
    )
}

const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
        <div className="r-button">
              <button onClick={()=> swiper.slidePrev()}>&lt;</button>
              <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}