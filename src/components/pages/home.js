import CarouselSection from "./home/Carousel";
import HeroSection from "./home/hero";
import FormSection from "./home/FormSection";

import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <CarouselSection />
      <FormSection />
    </React.Fragment>
  );
};

export default Home;
