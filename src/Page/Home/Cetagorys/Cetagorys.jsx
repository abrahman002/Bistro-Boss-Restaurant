import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

const Cetagorys = () => {
    return (
      <section>
          <SectionTitle
            subHeading={"From 10.00am to 10.00pm"}
            Heading={"Order online"}
          ></SectionTitle>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-10"
        >
            <SwiperSlide>
                <img className="rounded" src={slider1} alt="" />
                <h3 className="text-4xl text-center -mt-20 text-white uppercase">Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className="rounded" src={slider2} alt="" />
            <h3 className="text-4xl text-center -mt-20 text-white uppercase">Pizza</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className="rounded" src={slider3} alt="" />
            <h3 className="text-4xl text-center -mt-20 text-white uppercase">Soups</h3> 
            </SwiperSlide>
            <SwiperSlide>
            <img className="rounded" src={slider4} alt="" />
            <h3 className="text-4xl text-center -mt-20 text-white uppercase">Desserts</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className="rounded" src={slider5} alt="" />
            <h3 className="text-4xl text-center -mt-20 text-white uppercase">Salads</h3>
            </SwiperSlide>
         
        </Swiper>
      </section>
    );
};

export default Cetagorys;