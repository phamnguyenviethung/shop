import React from 'react';
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
import formatCurrency from '../../utils/formatCurrency';
import { Link } from 'react-router-dom';

const CartTable = ({ data }) => {
  const dispatch = useDispatch();

  //  Total price
  const reducer = (a, item) => a + item.count * item.price;
  const total = data.reduce(reducer, 0);

  const increaseHandler = item => {
    dispatch(increase(item));
  };

  return (
    <>
      <Flex
        py={4}
        w="full"
        mt={4}
        minH="30%"
        px={[0, 6]}
        direction={['column', 'column', 'column', 'row']}
      >
        <Flex direction="column" flex="2">
          <Flex justifyContent="space-between">
            <Heading as="h4" size="md" color="gray.500" fontWeight="600">
              Shopping Cart
            </Heading>
            <Text>{data.length} sản phẩm</Text>
          </Flex>

          <UnorderedList mt={8} ml="0">
            {data.map((item, key) => {
              return (
                <ListItem key={key} listStyleType="none" mt={4} px={2}>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    w="full"
                  >
                    <Flex mr={4} maxW={['50%', '28%']} alignItems="center">
                      <Image
                        src={item.thumb}
                        boxSize={['60px', '70px', '80px']}
                        mr={[2, 2, 6]}
                      />
                      <Flex direction="column" w="full">
                        <Heading
                          as="h3"
                          size={['sm', 'md']}
                          minW="0"
                          isTruncated
                          mb={1}
                        >
                          {item.name}
                        </Heading>
                        <Text fontSize="xs" display={['none', 'none', 'block']}>
                          Giá: {formatCurrency(item.price)}
                        </Text>

                        {/* Show on mobile/tablet */}
                        <Flex
                          display={['flex', 'flex', 'none']}
                          maxW="full"
                          ml={0}
                        >
                          <Button
                            bgColor="gray.50"
                            _focus={{
                              boxShadow: 'none',
                            }}
                            borderRadius="none"
                            onClick={() =>
                              item.count === 1
                                ? dispatch(removeFromCart(item))
                                : dispatch(decrease(item))
                            }
                            color="black.100"
                          >
                            <Text>-</Text>
                          </Button>
                          <Button
                            bgColor="gray.50"
                            _focus={{
                              boxShadow: 'none',
                            }}
                            border="none"
                            borderRadius="none"
                            color="teal.400"
                          >
                            {item.count}
                          </Button>
                          <Button
                            bgColor="gray.50"
                            _focus={{
                              boxShadow: 'none',
                            }}
                            border="none"
                            borderRadius="none"
                            onClick={() => increaseHandler(item)}
                            color="black.300"
                            fontWeight="600"
                          >
                            <Text>+</Text>
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex ml={2} display={['none', 'none', 'flex']}>
                      <Button
                        bgColor="gray.50"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        borderRadius="none"
                        onClick={() =>
                          item.count === 1
                            ? dispatch(removeFromCart(item))
                            : dispatch(decrease(item))
                        }
                        color="black.100"
                      >
                        <Text>-</Text>
                      </Button>
                      <Button
                        bgColor="gray.50"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        border="none"
                        borderRadius="none"
                        color="teal.400"
                      >
                        {item.count}
                      </Button>
                      <Button
                        bgColor="gray.50"
                        _focus={{
                          boxShadow: 'none',
                        }}
                        border="none"
                        borderRadius="none"
                        onClick={() => increaseHandler(item)}
                        color="black.300"
                        fontWeight="600"
                      >
                        <Text>+</Text>
                      </Button>
                    </Flex>
                    <Box
                      textAlign={['center', 'left']}
                      w={['20%', '20%', '10%']}
                    >
                      <Text color="black.300" fontWeight="600" fontSize="sm">
                        {formatCurrency(item.price * item.count)}
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

        <Flex
          direction="column"
          flex="1"
          px={8}
          justifyContent="space-between"
          mt={[20, 20, 20, 0]}
          backgroundColor="white"
          ml={[0, 0, 0, 4]}
        >
          <Heading as="h4" size="md" color="gray.500" fontWeight="600">
            Order Summary
          </Heading>

          <Flex mt={4}>
            <Text flex="1" fontWeight="600" color="black.300">
              {data.length} Sản Phẩm
            </Text>
            <Text color="black.300" fontWeight="600">
              {formatCurrency(total)}
            </Text>
          </Flex>

          <Flex mt={1}>
            <Text flex="1" color="black.300" fontWeight="600">
              Shipping
            </Text>
            <Text color="black.300" fontWeight="600">
              {formatCurrency(0)}
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
              _focus={{
                boxShadow: 'none',
              }}
              border="none"
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
                {formatCurrency(total)}
              </Text>
            </Flex>
          </Flex>
          <Link to="/checkout">
            <Button
              _focus={{
                boxShadow: 'none',
              }}
              border="none"
              textAlign="center"
              colorScheme="teal"
              py={6}
              w="100%"
            >
              Checkout
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default CartTable;
