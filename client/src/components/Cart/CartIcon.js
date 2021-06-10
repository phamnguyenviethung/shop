import React from 'react';
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { ListItem, UnorderedList, Button } from '@chakra-ui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import formatCurrency from '../../utils/formatCurrency';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';
import { FiShoppingBag } from 'react-icons/fi';

export const CartIconDetails = ({ cart }) => {
  const price = useSelector(state => state.cart.price);
  const { total, discount } = price;

  const dispatch = useDispatch();

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack pos="relative" onClick={onToggle} cursor="pointer" zIndex="99">
      <FiShoppingBag size={24} onClick={onToggle} />
      <Text
        pos="absolute"
        bottom="60%"
        left="65%"
        px={3}
        py={1}
        bgColor="red.600"
        color="white"
        borderRadius="full"
      >
        {cart.length}
      </Text>

      <Collapse in={isOpen} animateOpacity style={{ zIndex: 9999 }}>
        {cart.length === 0 ? (
          <Flex
            w="350px"
            h="300px"
            backgroundColor="white"
            pos="absolute"
            top="100%"
            right="0"
            borderWidth="0.5px"
            borderColor="gray.100"
            borderRadius="md"
            boxShadow="md"
            zIndex="999"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Image
              src="https://cdn.dribbble.com/users/2058104/screenshots/4198771/dribbble.jpg?compress=1&resize=800x600"
              alt="empty cart"
              boxSize="200px"
            />
            <Text color="gray.500">Your cart is empty</Text>
            <Link to="/">
              <Text color="green.500" fontWeight="bold">
                Keep shopping
              </Text>
            </Link>
          </Flex>
        ) : (
          <Flex
            h={
              cart.length === 1 ? '210px' : cart.length <= 2 ? '300px' : '420px'
            }
            maxH="800px"
            w="350px"
            pos="absolute"
            top="100%"
            right="0"
            borderWidth="0.9px"
            borderColor="gray.100"
            zIndex="99"
            direction="column"
            overflowX="hidden"
            backgroundColor="white"
          >
            <VStack h={cart.length === 2 ? '85%' : '70%'} pos="relative">
              <UnorderedList
                listStyleType="none"
                w="100%"
                overflowY="auto"
                overflowX="hidden"
                backgroundColor="white"
                zIndex="999"
                maxH="100%"
                p={2}
                m={0}
              >
                {cart.map((item, key) => {
                  return (
                    <ListItem
                      key={key}
                      w="full"
                      py={4}
                      borderBottom="1px solid #E2E8F0"
                    >
                      <Flex align="center">
                        <Flex>
                          <Link to={`/product/${item.slug}`}>
                            <Image
                              src={item.thumb[0]}
                              alt={item.name}
                              w="80px"
                              h="80px"
                              mr={0.5}
                            />
                          </Link>
                        </Flex>

                        <Flex direction="column" maxW="80%" flex="1" mr={1}>
                          <Link to={`/product/${item.slug}`}>
                            <Text noOfLines={2} fontSize="sm" fontWeight="bold">
                              {item.name}
                            </Text>
                          </Link>

                          <Text fontSize="12px">
                            {formatCurrency(item.price)}
                          </Text>
                        </Flex>

                        <Box
                          alignSelf="flex-start"
                          onClick={() =>
                            dispatch(
                              removeFromCart(item, item.size, item.color)
                            )
                          }
                        >
                          <AiFillCloseCircle size={18} color="#b1bdc5" />
                        </Box>
                      </Flex>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </VStack>
            <Flex
              h={
                cart.length === 1 ? '100px' : cart.length === 2 ? '15%' : '30%'
              }
              w="100%"
              direction="column"
              backgroundColor="white"
              position="absolute"
              bottom="0"
              justify="center"
              alignItems="center"
              boxShadow="lg"
              py={2}
            >
              <Box w="90%">
                {discount > 0 ? (
                  <HStack my={2}>
                    <Text textAlign="left" fontWeight="600" fontSize="sm">
                      Total:
                    </Text>
                    <Text fontSize="lg" fontWeight="700">
                      {formatCurrency(total - discount)}
                    </Text>
                    <Text
                      fontSize="md"
                      textDecor="line-through"
                      color="gray.400"
                    >
                      {formatCurrency(total)}
                    </Text>
                  </HStack>
                ) : (
                  <HStack my={2}>
                    <Text textAlign="left" fontWeight="600" fontSize="sm">
                      Total:
                    </Text>
                    <Text fontSize="lg" fontWeight="700">
                      {formatCurrency(total)}
                    </Text>
                  </HStack>
                )}
              </Box>
              {cart.length > 2 && (
                <Box w="full" px={4}>
                  <Link to="/cart">
                    <Button
                      w="100%"
                      minH="40px"
                      borderRadius="sm"
                      backgroundColor="green.400"
                      color="white"
                    >
                      Go To Cart
                    </Button>
                  </Link>
                </Box>
              )}
            </Flex>
          </Flex>
        )}
      </Collapse>
    </Stack>
  );
};

export const CartIcon = ({ cart }) => {
  return (
    <Stack pos="relative">
      <FiShoppingBag size={24} />
      <Text
        pos="absolute"
        bottom="60%"
        left="65%"
        px={3}
        py={1}
        bgColor="red.600"
        color="white"
        borderRadius="full"
      >
        {cart.length}
      </Text>
    </Stack>
  );
};
