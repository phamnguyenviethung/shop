import React, { useState, useEffect } from 'react';

import {
  Container,
  Center,
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  HStack,
  Button,
  Badge,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { addToCart } from '../../../actions/cartActions';

import formatCurrency from '../../../utils/formatCurrency';
import Rate from '../../shared/Rate';
import { BsHeart } from 'react-icons/bs';
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInfoCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import SizePicker from './Options';

import productApi from '../../../api/productApi';
import Gallery from './Gallery';

const ProductDetail = ({ slug }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [selectSize, setSelectSize] = useState('');
  const [selectColor, setSelectColor] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await productApi.getProduct(slug);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, [slug]);

  const sizeHandler = size => {
    setSelectSize(size);
  };

  const cartHandler = () => {
    if (selectSize === '' || selectColor === '') {
      setError(true);
    } else {
      setError(false);
      dispatch(addToCart(product, selectSize, selectColor));
    }
  };

  const {
    name,
    thumb,
    desc,
    price,
    categories,
    size,
    color,
    quantity,
    discount,
  } = product;

  useEffect(() => {
    color && setSelectColor(color[0]);
  }, [color]);

  return (
    <Container maxW="full" mt={[0, 10]}>
      <Center w="full" h="full">
        <Flex w={['full', '80%']} direction={['column', 'column', 'row']}>
          <Center
            w={['full', 'full', '600px']}
            my={[30, 26, 0]}
            mr={[0, 0, 4, 6]}
          >
            <Gallery src={thumb ? thumb : []} alt={name} />
          </Center>

          <Box flex="1">
            <Flex direction="column">
              <Heading as="h2" fontSize="2xl" fontWeight="500">
                {name}
              </Heading>
              <Text my={2} fontSize="2xl">
                {discount === 0 ? (
                  formatCurrency(price)
                ) : (
                  <HStack>
                    <Badge colorScheme="blackAlpha" fontSize="sm">
                      {`-${discount}%`}
                    </Badge>
                    <Text color="red.600" fontWeight="700">
                      {' '}
                      {formatCurrency(price - (discount / 100) * price)}
                    </Text>
                    <Text textDecoration="line-through" fontSize="sm">
                      {formatCurrency(price)}
                    </Text>
                  </HStack>
                )}
              </Text>
              <Rate rate={4} />
              <Text my={4}>{desc}</Text>
              <Divider colorScheme="gray" my={4} />

              <Box h="30px" my={2}>
                <Tabs colorScheme="green" h="full">
                  <Flex h="full" alignItems="center">
                    <TabList border="0">
                      {color &&
                        color.map((item, key) => {
                          return (
                            <Tab
                              mr={2}
                              bgColor={item}
                              value={item}
                              p={0}
                              h="30px"
                              w="30px"
                              borderRadius="full"
                              key={key}
                              onClick={e => setSelectColor(e.target.value)}
                              _selected={{
                                boxShadow: 'outline',
                              }}
                            ></Tab>
                          );
                        })}
                    </TabList>
                    <TabPanels h="30px">
                      {quantity &&
                        quantity.map((item, key) => {
                          return (
                            <TabPanel h="full" p={0} key={key}>
                              <SizePicker
                                data={size}
                                select={sizeHandler}
                                quantity={item}
                              />
                            </TabPanel>
                          );
                        })}
                    </TabPanels>
                  </Flex>
                </Tabs>
              </Box>

              {error && (
                <Flex my={2} alignItems="center">
                  <AiOutlineInfoCircle size={18} color="#C53030" />
                  <Text textAlign="left" color="red.600" ml={1}>
                    Vui lòng chọn size hoặc màu của sản phẩm
                  </Text>
                </Flex>
              )}

              <Box my={6}>
                <Flex alignItems="center">
                  <Button
                    p={6}
                    color="white"
                    bgColor="black"
                    textTransform="uppercase"
                    borderRadius="0"
                    fontWeight="700"
                    _hover={{
                      backgroundColor: 'black',
                    }}
                    _focus={{
                      boxShadow: 'none',
                    }}
                    onClick={cartHandler}
                  >
                    Add to Cart
                  </Button>
                  <Box ml={2}>
                    <BsHeart size={20} />
                  </Box>
                </Flex>
                <Flex mt={10} direction="column">
                  <Text color="gray" mb={2}>
                    Categories : {categories ? categories.toString() : null}
                  </Text>
                  <HStack>
                    <AiFillFacebook size={20} />
                    <AiOutlineInstagram size={20} />
                    <AiFillYoutube size={20} />
                    <AiOutlineTwitter size={20} />
                  </HStack>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Center>
    </Container>
  );
};

export default ProductDetail;