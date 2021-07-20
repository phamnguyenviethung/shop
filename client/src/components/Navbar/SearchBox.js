import React from 'react';
import { FastField, Form, Formik, useFormik } from 'formik';
import InputField from '../../Fields/Inputs';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Box,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Image,
  Center,
} from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { useDisclosure } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import formatCurrency from '../../utils/formatCurrency';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const productList = useSelector(state => state.product.productList);

  const formik = useFormik({
    initialValues: {
      search: '',
    },
  });
  const SearchList = ({ value }) => {
    if (value.length < 2) {
      return <div></div>;
    }

    const data = productList.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (data.length === 0) {
      return <Center>Không tìm thấy sản phẩm</Center>;
    }

    return (
      <Box w="full" h="full">
        {data.map((item, key) => {
          return (
            <ListItem mb={4} key={key} onClick={onClose}>
              <Link to={`/product/${item.slug}`}>
                <Flex alignItems="center">
                  <Flex direction="column" flex="3" maxW="70%">
                    <Text fontSize="14px" isTruncated color="gray.900">
                      {item.name}
                    </Text>
                    <Text fontSize="12px" color="gray.600">
                      {formatCurrency(item.price)}
                    </Text>
                  </Flex>
                  <Box w="50px" h="50px" flex="1">
                    <Image src={item.thumb[0]} alt={item.name} sizes="sm" />
                  </Box>
                </Flex>
              </Link>
            </ListItem>
          );
        })}
        <ListItem mt={4}>
          <Link to={`/search?name=${value}`} onClick={onClose}>
            <Center>Xem chi tiết</Center>
          </Link>
        </ListItem>
      </Box>
    );
  };

  return (
    <>
      <Box px={2} cursor="pointer">
        <AiOutlineSearch size={24} onClick={onOpen} />
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="gray.500" fontSize="md">
            Tìm kiếm
          </DrawerHeader>

          <DrawerBody>
            <Formik
              initialValues={formik.initialValues}
              onSubmit={values => {
                history.push(`/search?name=${values.search}`);
                onClose();
              }}
            >
              {props => {
                const { values } = props;

                return (
                  <>
                    <Form>
                      <Flex
                        alignItems="center"
                        pos="relative"
                        w="full"
                        h="full"
                      >
                        <FastField
                          name="search"
                          component={InputField}
                          placeholder="TÌM KIẾM SẢN PHẨM"
                          bgColor="#f5f5f5"
                        />
                        <Flex
                          pos="absolute"
                          right="0"
                          top="0"
                          bottom="0"
                          alignItems="center"
                        ></Flex>
                      </Flex>
                    </Form>
                    <UnorderedList styleType="none" mt={2}>
                      <SearchList value={values.search} />
                    </UnorderedList>
                  </>
                );
              }}
            </Formik>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Search;
