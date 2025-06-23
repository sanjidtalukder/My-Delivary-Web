import React from 'react';
import Slider from './Slider';
import ServiceCards from './ServiceCards';
import ClientLogos from './ClientLogos';
import DeliverySection from './DeliverySection';
import BeMarcen from './BeMarcen';
import UserFeedback from './UserFeedback';

const Home = () => {
    return (
        <div>
          <Slider></Slider> 
          <ServiceCards></ServiceCards>
          <ClientLogos></ClientLogos>
          <DeliverySection></DeliverySection>
          <BeMarcen></BeMarcen>
          <UserFeedback></UserFeedback>
        </div>
    );
};

export default Home;