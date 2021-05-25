import React, { useState } from 'react';
import {
  Container,
  Flex,
  Heading,
  Button,
  Text,
  HStack,
  Box,
  Center,
} from '@chakra-ui/react';
import { addToCart } from '../../../actions/cartActions';
import { useDispatch } from 'react-redux';
import formatCurrency from '../../../utils/formatCurrency';
import Rate from '../../shared/Rate';
import { AiOutlineEye } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import styled from 'styled-components';

const Product = ({ data }) => {
  const dispatch = useDispatch();

  const HoverIcon = styled(HStack)`
    visibility: hidden;
    transition: all ease 0.3s;
    opacity: 0;
  `;
  const HoverIconContainer = styled(Center)`
    background-color: 'none';
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:hover ${HoverIcon} {
      visibility: visible;
      opacity: 1;
    }
  `;

  return (
    <Container className="row" maxW="full">
      {data.map((item, key) => {
        return (
          <Container
            className="col-lg-3 col-md-6 col-sm-12"
            p={0}
            m={0}
            mb={10}
            key={key}
          >
            <Flex direction="column" alignItems="center" cursor="pointer">
              <Box w="full" h="full" pos="relative">
                <Container
                  bgImage={`url(${item.thumb})`}
                  bgPosition="center"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  pt="50%"
                  h="full"
                  w="full"
                />

                <HoverIconContainer
                  h="full"
                  w="full"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                >
                  <HoverIcon>
                    <Center
                      p={4}
                      backgroundColor="green.300"
                      borderRadius="full"
                    >
                      <AiOutlineEye size={18} color="white" />
                    </Center>
                    <Center
                      p={4}
                      backgroundColor="green.300"
                      borderRadius="full"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <HiShoppingCart size={18} color="white" />
                    </Center>
                  </HoverIcon>
                </HoverIconContainer>
              </Box>
              <Heading
                as="h2"
                size="md"
                my={4}
                fontWeight="400"
                color="gray.700"
              >
                {item.name}
              </Heading>
              <Rate rate={5} />
              <Text size="sm" mb={4} color="black.500" fontWeight="bold">
                {formatCurrency(item.price)}
              </Text>
            </Flex>
          </Container>
        );
      })}
    </Container>
  );
};

export default Product;
