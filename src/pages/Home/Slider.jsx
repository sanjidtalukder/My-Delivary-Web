import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import banner3 from '../../assets/banner/banner3.png';

const Slider = () => {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] max-w-screen-xl mx-auto my-6 rounded-lg overflow-hidden shadow-lg">
      <AwesomeSlider bullets={true} organicArrows={true} infinite={true} className="h-full">
        <div className="relative h-full w-full ">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
         {/* <button className="btn btn-neutral">Neutral</button> */}
          
        </div>
        <div className="relative h-full w-full">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
         
        </div>
        <div className="relative h-full w-full">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
          
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
