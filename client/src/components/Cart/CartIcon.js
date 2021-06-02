import React, { useRef } from 'react';
import {
  Box,
  Collapse,
  Flex,
  Image,
  Stack,
  Text,
  useDisclosure,
  useOutsideClick,
  VStack,
} from '@chakra-ui/react';
import { ListItem, UnorderedList, Heading, Button } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import formatCurrency from '../../utils/formatCurrency';
import { Link } from 'react-router-dom';

export const CartIconDetails = ({ cart }) => {
  const ref = useRef();
  const { isOpen, onToggle, onClose } = useDisclosure();
  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  return (
    <Stack pos="relative" onClick={onToggle} cursor="pointer">
      <AiOutlineShoppingCart size={24} />
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

      <Collapse in={isOpen} animateOpacity style={{ zIndex: 9999 }} ref={ref}>
        {cart.length === 0 ? (
          <Flex
            w="350px"
            h="150px"
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
              cart.length === 1 ? '200px' : cart.length <= 2 ? '250px' : '330px'
            }
            maxH="700px"
            w="350px"
            pos="absolute"
            top="100%"
            right="0"
            borderWidth="0.9px"
            borderColor="gray.100"
            zIndex="999"
            direction="column"
            overflowX="hidden"
            backgroundColor="white"
          >
            <VStack maxH="70%" pos="relative">
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
                    <ListItem mb={2} w="full" py={2} key={key}>
                      <Flex align="center">
                        <Image
                          src={item.thumb}
                          alt={item.name}
                          w="50px"
                          h="50px"
                          mr={0.5}
                        />
                        <Flex direction="column" maxW="80%">
                          <Text noOfLines={2} fontSize="sm" fontWeight="bold">
                            {item.name}
                          </Text>
                          <Text fontSize="12px">
                            {formatCurrency(item.price)}
                          </Text>
                        </Flex>
                      </Flex>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </VStack>
            <Flex
              h={cart.length === 1 ? '50%' : cart.length === 2 ? '35%' : '30%'}
              w="100%"
              direction="column"
              backgroundColor="white"
              position="absolute"
              bottom="0"
              borderTopWidth="1px"
              borderTopColor="gray.300"
              borderTopStyle="solid"
              justify="center"
              alignItems="center"
              boxShadow="lg"
              py={2}
            >
              <Box w="90%">
                <Heading as="h3" fontSize="16px" my={2} textAlign="left">
                  Total: 200.000VNĐ
                </Heading>
              </Box>
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
      <AiOutlineShoppingCart size={24} />
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
