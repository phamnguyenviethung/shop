import { Image } from '@chakra-ui/image';
import { Container } from '@chakra-ui/layout';
import React from 'react';
import Slider from 'react-slick';
import { images } from './data';
import { Prev, Next } from './Arrows';
import FeaturesLoading from '../../shared/Loading/SlideLoading';
import { useSelector } from 'react-redux';

const SlideFeatures = () => {
  const product = useSelector(state => state.product.productList);
  const loading = product.length === 0;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,

    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container maxW="full" w="full" my={4} overflow="hidden">
      {loading ? (
        <FeaturesLoading />
      ) : (
        <Slider {...settings}>
          {images.map((item, key) => {
            return <Image src={item.src} alt={item.alt} maxW="98%" key={key} />;
          })}
        </Slider>
      )}
    </Container>
  );
};

export default SlideFeatures;
