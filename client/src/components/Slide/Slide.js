import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
  };
  return (
    <Container
      w="full"
      h={['150px', '250px', '250px', '250px', '400px']}
      maxW="95%"
    >
      <Slider {...settings}>
        <Image
          src="https://bizweb.dktcdn.net/100/287/440/collections/top-local-brand-nu-dep-viet-nam.jpg?v=1543560689940"
          alt="slider"
        />

        <Image
          src="https://bizweb.dktcdn.net/100/287/440/collections/local-brand-ban-phu-kien-dep.jpg?v=1557229907217"
          alt="slider"
        />

        <Image
          src="https://bizweb.dktcdn.net/100/287/440/collections/top-local-brand-nu-dep-viet-nam.jpg?v=1543560689940"
          alt="slider"
        />

        <Image
          src="https://bizweb.dktcdn.net/100/287/440/collections/untitled-1.jpg?v=1539529108990"
          alt="slider"
        />
      </Slider>
    </Container>
  );
};

export default Slide;
