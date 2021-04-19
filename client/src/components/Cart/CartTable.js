import React, { useState } from 'react';
import {
  Flex,
  Image,
  Box,
  Heading,
  Button,
  ListItem,
  UnorderedList,
  Text,
  Select,
  Input,
} from '@chakra-ui/react';

import { removeFromCart, increase, decrease } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';

const CartTable = ({ data }) => {
  const dispatch = useDispatch();

  //  Total price
  const reducer = (a, item) => a + item.count * item.price;
  const total = data.reduce(reducer, 0);

  return (
    <>
      <Flex py={4} px={2} w="full" mt={4} minH="30%">
        <Flex direction="column" flex="2" px={8}>
          <Flex justifyContent="space-between">
            <Heading as="h4" size="md" color="gray.500" fontWeight="600">
              Shopping Cart
            </Heading>
            <Text>{data.length} sản phẩm</Text>
          </Flex>

          <UnorderedList mt={8}>
            {data.map((item, key) => {
              return (
                <ListItem key={key} listStyleType="none" mt={4} px={2}>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    w="full"
                  >
                    <Flex mr={4} textAlign="left" maxW="28%">
                      <Image src={item.thumb} boxSize="65px" mr={6} />
                      <Flex direction="column" w="full">
                        <Heading as="h3" size="sm" minW="0" isTruncated>
                          {item.name}
                        </Heading>
                        <Text>Size: 10x60cm</Text>
                      </Flex>
                    </Flex>

                    <Flex ml={2}>
                      <Button
                        borderRadius="none"
                        onClick={() =>
                          item.count === 1
                            ? dispatch(removeFromCart(item))
                            : dispatch(decrease(item))
                        }
                        color="black.100"
                      >
                        -
                      </Button>
                      <Button borderRadius="none" color="teal.400">
                        {item.count}
                      </Button>
                      <Button
                        borderRadius="none"
                        onClick={() => dispatch(increase(item))}
                        color="black.300"
                        fontWeight="600"
                      >
                        +
                      </Button>
                    </Flex>
                    <Box textAlign="left" w="10%">
                      <Text color="black.300" fontWeight="600" fontSize="sm">
                        {item.price} VND
                      </Text>
                    </Box>

                    <Text
                      color="red.500"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      <AiOutlineDelete size={34} />
                    </Text>
                  </Flex>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Flex>

        <Flex direction="column" flex="1" px={8} justifyContent="space-between">
          <Heading as="h4" size="md" color="gray.500" fontWeight="600">
            Order Summary
          </Heading>

          <Flex mt={4}>
            <Text flex="1" fontWeight="600" color="black.300">
              {data.length} Sản Phẩm
            </Text>
            <Text color="black.300" fontWeight="600">
              {total} VND
            </Text>
          </Flex>

          <Flex mt={1}>
            <Text flex="1" color="black.300" fontWeight="600">
              Shipping
            </Text>
            <Text color="black.300" fontWeight="600">
              0
            </Text>
          </Flex>

          <Select placeholder="Chọn thời gian muốn nhận hàng" my={4}>
            <option value="1">1 ngày</option>
            <option value="3">3 ngày</option>
            <option value="7">7 ngày</option>
          </Select>

          <Flex direction="column" mb={4}>
            <Text>Promo code</Text>
            <Input placeholder="Enter code" my={2} p={2} />
            <Button
              maxW="30%"
              px={2}
              py={6}
              textAlign="center"
              colorScheme="teal"
            >
              Apply
            </Button>
          </Flex>

          <Flex direction="column">
            <Flex w="full">
              <Text
                flex="1"
                color="black.300"
                fontWeight="600"
                fontSize="xl"
                mb={4}
              >
                Total cost
              </Text>
              <Text fontWeight="600" fontSize="lg">
                {total} VND
              </Text>
            </Flex>
          </Flex>
          <Button textAlign="center" colorScheme="teal" py={4}>
            Checkout
          </Button>
        </Flex>
      </Flex>

      {/* <Table variant="simple" border="solid" borderColor="gray.200">
        <Thead>
          <Tr>
            <Th>Tên</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Số lượng</Th>
            <Th isNumeric>Tổng</Th>
            <Th isNumeric>Chức năng</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, key) => {
            const subtotal = item.count * item.price;
            total.push(subtotal);
            console.log(total);
            return (
              <Tr key={key}>
                <Td>{item.name}</Td>
                <Td isNumeric>{item.price}</Td>
                <Td isNumeric>{item.count}</Td>
                <Td isNumeric> {subtotal} </Td>
                <Td isNumeric>
                  <Button onClick={() => dispatch(increase(item))}>+</Button>
                  <Button
                    onClick={() =>
                      item.count === 1
                        ? dispatch(removeFromCart(item))
                        : dispatch(decrease(item))
                    }
                  >
                    -
                  </Button>
                  <Button onClick={() => dispatch(removeFromCart(item))}>
                    x
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <CartInfo /> */}
    </>
  );
};

export default CartTable;
