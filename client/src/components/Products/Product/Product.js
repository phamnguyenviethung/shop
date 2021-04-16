import React from 'react';
import { Container, Flex, Heading, Button } from '@chakra-ui/react';
import { addToCart } from '../../../actions/cartActions';
import { useDispatch } from 'react-redux';

const Product = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Container class="row">
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
                {item.stickerName}
              </Heading>
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
