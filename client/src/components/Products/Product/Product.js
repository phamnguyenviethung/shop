import React from 'react';
import { Container, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { addToCart } from '../../../actions/cartActions';
import { useDispatch } from 'react-redux';
import formartCurrency from '../../../utils/formatCurrency';

const Product = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Container className="row" maxW="full">
      {data.map((item, key) => {
        return (
          <Container
            className="col-lg-4 col-md-6 col-sm-12"
            p={0}
            m={0}
            mb={10}
            key={key}
          >
            <Flex direction="column" alignItems="center">
              <Container
                bgImage={`url(${item.thumb})`}
                bgPosition="center"
                bgSize="contain"
                bgRepeat="no-repeat"
                pt="50%"
                h="full"
              />
              <Heading as="h3" size="xl" my={4}>
                {item.name}
              </Heading>
              <Text size="md" mb={4} color="black.800">
                {formartCurrency(item.price)}
              </Text>
              <Button onClick={() => dispatch(addToCart(item))}>
                Add to cart
              </Button>
            </Flex>
          </Container>
        );
      })}
    </Container>
  );
};

export default Product;
