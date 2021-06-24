import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { HStack, Box } from '@chakra-ui/react';

const Rate = ({ rate }) => {
  if (rate > 5 || rate < 0) {
    return null;
  }
  const stars = [false, false, false, false, false];

  for (let i = 0; i <= rate - 1; i++) {
    stars[i] = true;
  }

  return (
    <HStack>
      {stars.map((item, key) => {
        return item ? (
          <Box color="yellow.500" key={key}>
            <AiFillStar size={22} />
          </Box>
        ) : (
          <Box color="yellow.500" key={key}>
            <AiOutlineStar size={22} />
          </Box>
        );
      })}
    </HStack>
  );
};

export default Rate;
