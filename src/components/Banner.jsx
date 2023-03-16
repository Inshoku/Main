import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Pagination, EffectFade} from "swiper";

export default function App() {
  return (
    <>
    <div>
      <Swiper autoplay={{delay: 4000,}} loop={true}  effect={"fade"} pagination={true} modules={[EffectFade, Pagination, Autoplay]} className="mySwiper h-screen">
        <SwiperSlide>
          <img src="src/assets/img/bg1.png" className="bg-black text-white" alt="Loading" />
          <h1 className="font-bold absolute text-4xl text-white font-arapey">Since 2001</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/img/bg2.png" alt="Loading" className="bg-black/50"/>
          <h1 className="font-bold absolute text-4xl text-black font-arapey">Various types of food</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/img/bg3.png" alt="Loading" className="bg-black/90" />
          <h1 className="font-bold absolute text-4xl text-white font-arapey">Made with best ingredient</h1>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

