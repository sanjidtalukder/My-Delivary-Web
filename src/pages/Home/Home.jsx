import React from 'react';
import Slider from './Slider';
import ServiceCards from './ServiceCards';
import ClientLogos from './ClientLogos';
import DeliverySection from './DeliverySection';
import BeMarcen from './BeMarcen';

const Home = () => {
    return (
        <div>
          <Slider></Slider> 
          <ServiceCards></ServiceCards>
          <ClientLogos></ClientLogos>
          <DeliverySection></DeliverySection>
          <BeMarcen></BeMarcen>
        </div>
    );
};

export default Home;