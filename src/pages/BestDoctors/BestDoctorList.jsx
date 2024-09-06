import React, { useRef } from "react";
import doctors from "../../assets/images/banner/bioimage.png";
import BikoMedicalTreatment from "../Home/BIkoMedicalTreatment/BikoMedicalTreatment";
import medicalTreatmentImage from "../../assets/images/banner/medicaltreatmentlogo.png";
import Container from "../../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BestDoctorSection from "../../components/ui/BestDoctors";

const autoPlayProgressStyle = {
  position: "absolute",
  right: "16px",
  bottom: "16px",
  zIndex: "10",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
};

const BestDoctorList = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Container>
        <BikoMedicalTreatment image={medicalTreatmentImage} />
      </Container>
 
    <BestDoctorSection/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <BikoMedicalTreatment image={doctors} />
        </SwiperSlide>
        <SwiperSlide>
          <BikoMedicalTreatment image={doctors} />
        </SwiperSlide>

        <div
          style={{ autoPlayProgressStyle }}
          className="autoplay-progress"
          slot="container-end"
        >
          <svg
            className="absolute right-0  z-10 w-full h-full "
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <BestDoctorSection/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <BikoMedicalTreatment image={doctors} />
        </SwiperSlide>
        <SwiperSlide>
          <BikoMedicalTreatment image={doctors} />
        </SwiperSlide>

        <div
          style={{ autoPlayProgressStyle }}
          className="autoplay-progress"
          slot="container-end"
        >
          <svg
            className="absolute right-0  z-10 w-full h-full "
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <BestDoctorSection/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <BikoMedicalTreatment image={doctors} />
        </SwiperSlide>
        <SwiperSlide>
          <BikoMedicalTreatment image={doctors} />
        </SwiperSlide>

        <div
          style={{ autoPlayProgressStyle }}
          className="autoplay-progress"
          slot="container-end"
        >
          <svg
            className="absolute right-0  z-10 w-full h-full "
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      
    </div>
  );
};

export default BestDoctorList;
