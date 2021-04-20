import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  HStack,
  Select,
  Textarea,
  Text,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import formartCurrency from '../utils/formartCurrency';

const Checkout = () => {
  const data = useSelector(state => state.cart.cartItems);

  //  Total price
  const reducer = (a, item) => a + item.count * item.price;
  const total = data.reduce(reducer, 0);

  return (
    <HStack>
      <Container height="100vh" px={0} maxW="75%">
        <Flex>
          <Flex direction="column" flex="2">
            <Heading as="h4" size="md" color="gray.500" fontWeight="600" mb={4}>
              Billing Details
            </Heading>

            <Flex direction="column">
              <FormControl id="name" isRequired>
                <FormLabel>Họ và tên</FormLabel>
                <Input mb={2} type="name" />
              </FormControl>

              <FormControl id="address" isRequired>
                <FormLabel>Địa chỉ</FormLabel>
                <Input mb={2} type="address" />
              </FormControl>
              <Flex justifyContent="space-between">
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input mb={2} type="email" maxW="96%" />
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>Số điện thoại</FormLabel>
                  <Input mb={2} type="phone" />
                </FormControl>
              </Flex>

              <FormControl id="country">
                <FormLabel>Phương thức thanh toán</FormLabel>
                <Select placeholder="Chọn phương thức">
                  <option>Thanh toán khi giao hàng</option>
                  <option>Thanh toán qua ví MOMO</option>
                </Select>
              </FormControl>
              <Heading
                as="h4"
                size="sm"
                color="gray.500"
                fontWeight="600"
                my={2}
              >
                Thông tin thêm
              </Heading>
              <FormControl id="note">
                <FormLabel mb={2}>Note</FormLabel>
                <Textarea
                  type="note"
                  size="lg"
                  placeholder="Notes about your delivery, time..."
                />
              </FormControl>
            </Flex>
          </Flex>

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
                  0
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
        </Flex>
      </Container>
    </HStack>
  );
};

export default Checkout;
