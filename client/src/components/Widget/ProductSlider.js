import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import React from 'react';
import Slider from 'react-slick';
import { Prev, Next } from '../Features/Arrows';
import FeaturesLoading from '../shared/Loading/FeaturesLoading';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

const ProductSlider = ({ data }) => {
  const product = useSelector(state => state.product.productList);
  const loading = product.length === 0;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,

    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <Container maxW="full" w="full" my={2} overflow="hidden">
      {loading ? (
        <FeaturesLoading />
      ) : (
        <Slider {...settings}>
          {data.map((item, key) => {
            return (
              <Flex
                key={key}
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  w="xs"
                  bg="white"
                  shadow="lg"
                  rounded="lg"
                  overflow="hidden"
                  // mx="auto"
                >
                  <Image
                    w="full"
                    h={56}
                    fit="cover"
                    src={item.thumb[0]}
                    alt="avatar"
                  />

                  <Box py={5} px={2} textAlign="center">
                    <Link
                      display="block"
                      fontSize="2xl"
                      color="gray.800"
                      fontWeight="bold"
                    >
                      <Text
                        isTruncated
                        align="center"
                        fontWeight="400"
                        fontSize="md"
                      >
                        {' '}
                        {item.name}
                      </Text>
                    </Link>
                    <Text fontSize="sm" color="gray.700">
                      {formatCurrency(item.price)}
                    </Text>
                  </Box>
                </Box>
              </Flex>
            );
          })}
        </Slider>
      )}
    </Container>
  );
};

export default ProductSlider;
