import React from 'react';
import Container from '../../Container/Container';

const BestDoctorSection = () => {
    return (
        <div >
                 <Container className={'my-8'}>
        <div class="relative flex justify-between items-center">
          <h2 class="text-2xl md:text-3xl lg::text-5xl font-bold mb-2">Best Medicine Doctor</h2>
          <h2 className="text-xl md:text-4xl">See All</h2>
          <div class="absolute -bottom-2 z-20 w-1/2 md:w-72 h-[3px] bg-black"></div>

          <div class="absolute bottom-[-7px] w-full h-[2px] bg-gray-300"></div>
        </div>
      </Container>
        </div>
    );
};

export default BestDoctorSection;