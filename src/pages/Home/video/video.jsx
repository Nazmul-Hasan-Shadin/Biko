import React from "react";
import Container from "../../../Container/Container";
import medicalTreatmentImage from "../../../assets/images/banner/medicaltreatmentlogo.png";
const VideoSection = () => {
  return (
    <div className="px-8 my-8">
      <Container>
        <div className="w-full">
          <iframe
            width="100%"
            height="465"
            src="https://www.youtube.com/embed/qUlT-2Tl34Y?si=mTYn1vXmbTar06o7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

     
        </div>
      </Container>
    </div>
  );
};

export default VideoSection;
