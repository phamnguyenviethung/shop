import {
  Divider,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Badge,
  chakra,
} from '@chakra-ui/react';
import formartCurrency from '../../utils/formatCurrency';

import React from 'react';
import formatCurrency from '../../utils/formatCurrency';

const OrderInfo = ({ data }) => {
  const quantityProduct = data.cartItems.reduce((a, item) => a + item.count, 0);

  return (
    <Flex direction="column" flex="1" ml={10}>
      <Flex>
        <Heading
          as="h4"
          size="md"
          color="gray.500"
          fontWeight="600"
          mb={4}
          flex="1"
        >
          Đơn hàng của bạn
        </Heading>
        <Heading as="h4" size="md" color="gray.500" fontWeight="600" mb={4}>
          {quantityProduct} sản phẩm
        </Heading>
      </Flex>
      <Flex direction="column" bgColor="gray.50" p={10}>
        <Flex justifyContent="space-between">
          <Text>Sản phẩm</Text>
          <Text>Tổng cộng</Text>
        </Flex>
        <Divider my={4} />
        <UnorderedList listStyleType="none" m={0}>
          {data.cartItems.map((item, key) => {
            return (
              <ListItem key={key} mb={1}>
                <Flex>
                  <Flex flex="1" direction="column">
                    <Text
                      flex="1"
                      fontFamily="Poppins, sans-serif"
                      fontWeight="800"
                      fontSize="md"
                      w="full"
                    >
                      {item.name}
                      <chakra.span
                        fontFamily="Poppins, sans-serif"
                        fontWeight="300"
                        display="inline"
                        ml={1}
                      >
                        x {item.count}
                      </chakra.span>
                    </Text>

                    <Text
                      w="full"
                      fontFamily="Poppins, sans-serif"
                      fontWeight="300"
                      fontSize="sm"
                    >
                      {item.size}/{item.color}
                    </Text>
                  </Flex>
                  <Text fontFamily="Poppins, sans-serif" fontWeight="400">
                    {formartCurrency(item.price * item.count)}
                  </Text>
                </Flex>
              </ListItem>
            );
          })}
        </UnorderedList>
        <Divider my={4} />
        <Flex justifyContent="space-between" mt={4}>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            Tạm tính:
          </Text>

          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            {formartCurrency(data.price.total)}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" mt={2}>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            Giảm giá:
          </Text>
          <Flex>
            <Badge mx="2" colorScheme="red" fontSize="sm">
              -{data.price.percent}%
            </Badge>
            <Text fontFamily="Poppins, sans-serif" fontWeight="400">
              {formatCurrency(data.price.discount)}
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" mt={2} mb={4}>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            Shipping:
          </Text>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            {formartCurrency(0)}
          </Text>
        </Flex>
        <Divider my={4} />
        <Flex justifyContent="space-between" my={4}>
          <Text fontFamily="Poppins, sans-serif" fontWeight="400">
            Total:
          </Text>
          <Text
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            color="teal.600"
            fontSize="xl"
          >
            {formartCurrency(data.price.total - data.price.discount)}
          </Text>
        </Flex>
        <Divider my={4} />
      </Flex>
    </Flex>
  );
};

export default OrderInfo;
