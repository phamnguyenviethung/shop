import { Center } from '@chakra-ui/layout';
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const Prev = ({ onClick }) => {
  return (
    <Center
      onClick={onClick}
      pos="absolute"
      w="40px"
      h="40px"
      top="50%"
      transform="translate(0, -50%)"
      zIndex="10"
      borderRadius="full"
      bgColor="white"
      boxShadow="md"
      left="-12px"
      cursor="pointer"
    >
      <IoIosArrowBack size={25} color="#48BB78" />
    </Center>
  );
};

export const Next = ({ onClick }) => {
  return (
    <Center
      onClick={onClick}
      pos="absolute"
      w="40px"
      h="40px"
      top="50%"
      transform="translate(0, -50%)"
      zIndex="10"
      borderRadius="full"
      bgColor="white"
      boxShadow="md"
      right="-12px"
      cursor="pointer"
    >
      <IoIosArrowForward size={25} color="#48BB78" />
    </Center>
  );
};
