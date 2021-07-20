import { Flex, Text, Box, Image, Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import React from 'react';
import Slider from 'react-slick';
import { Prev, Next } from '../Features/Slide/Arrows';
import SlideLoading from '../shared/Loading/SlideLoading';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

const ProductSlider = ({ data, heading }) => {
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
          slidesToShow: 2,
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
        <SlideLoading />
      ) : (
        <>
          <Heading as="h6" fontSize="30px">
            {heading || ''}
          </Heading>
          <Slider {...settings}>
            {data.map((item, key) => {
              return (
                <Link
                  display="block"
                  fontSize="2xl"
                  color="gray.800"
                  fontWeight="bold"
                  to={`/product/${item.slug}`}
                  key={key}
                >
                  <Flex
                    p={45}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                    bg="white"
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
                        <Text
                          isTruncated
                          align="center"
                          fontWeight="400"
                          fontSize="md"
                        >
                          {' '}
                          {item.name}
                        </Text>
                        <Text fontSize="sm" color="gray.700">
                          {formatCurrency(item.price)}
                        </Text>
                      </Box>
                    </Box>
                  </Flex>
                </Link>
              );
            })}
          </Slider>
        </>
      )}
    </Container>
  );
};

export default ProductSlider;
