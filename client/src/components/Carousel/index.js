import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useSelector } from 'react-redux';
import Spinner from '../shared/Loading/Spinner';

const Carousel = () => {
  const loading = useSelector(state => state.product.loading);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
    nextArrow: null,
    prevArrow: null,
  };
  return (
    <Container w="full" maxW="100%" overflow="hidden" mb={10}>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </Container>
  );
};

export default Carousel;
