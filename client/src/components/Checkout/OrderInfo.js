import { Button } from '@chakra-ui/button';
import {
  Divider,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import formartCurrency from '../../utils/formartCurrency';

import React from 'react';

const OrderInfo = ({ data }) => {
  //  Total price
  const reducer = (a, item) => a + item.count * item.price;
  const total = data.reduce(reducer, 0);
  return (
    <Flex direction="column" flex="1" ml={10}>
      <Heading as="h4" size="md" color="gray.500" fontWeight="600" mb={4}>
        Your Order
      </Heading>
      <Flex direction="column" bgColor="gray.50" p={10}>
        <Flex justifyContent="space-between">
          <Text>Product</Text>
          <Text>Total</Text>
        </Flex>
        <Divider my={4} />
        {data.map((item, key) => {
          return (
            <UnorderedList listStyleType="none" m={0}>
              <ListItem>
                <Flex>
                  <Text
                    flex="1"
                    fontFamily="Poppins, sans-serif"
                    fontWeight="400"
                  >
                    {item.name} x {item.count}
                  </Text>
                  <Text fontFamily="Poppins, sans-serif" fontWeight="400">
                    {formartCurrency(item.price * item.count)}
                  </Text>
                </Flex>
              </ListItem>
            </UnorderedList>
          );
        })}
        <Divider my={4} />
        <Flex justifyContent="space-between" my={4}>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            Shipping
          </Text>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            {formartCurrency(0)}
          </Text>
        </Flex>
        <Divider my={4} />
        <Flex justifyContent="space-between" my={4}>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            Total
          </Text>
          <Text
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            color="teal.600"
          >
            {formartCurrency(total)}
          </Text>
        </Flex>
        <Divider my={4} />
      </Flex>
      <Button mt={6} borderRadius="3xl" colorScheme="teal">
        Place Order
      </Button>
    </Flex>
  );
};

export default OrderInfo;
