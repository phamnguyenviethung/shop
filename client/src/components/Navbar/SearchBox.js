import React from 'react';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../Fields/Inputs';
import { AiOutlineSearch } from 'react-icons/ai';
import { Box, Flex, Text, Container } from '@chakra-ui/react';
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

export const SearchBox = () => {
  const history = useHistory();

  return (
    <Flex
      h="60px"
      bgColor="purple.600"
      alignItems="center"
      justifyContent="space-around"
    >
      <Text color="white" fontSize="xs">
        VIETHUNG01234@GMAIL.COM | HOTLINE: 0703 162 716
      </Text>
      <Box textAlign="center">
        <Text color="white" fontSize="xs">
          Tặng ngay 1 túi Tote Bag khi mua sản phẩm từ 300.000 vnđ
        </Text>
        <Text color="white" fontSize="xs">
          Đơn hàng được FreeShip khi mua từ 1.500.000 vnđ
        </Text>
      </Box>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={values => {
          history.push(`/search?name=${values.search}`);
        }}
      >
        {formikProps => {
          return (
            <Form style={{ width: '20%' }}>
              <Flex alignItems="center" pos="relative" w="full" h="full">
                <FastField
                  name="search"
                  component={InputField}
                  placeholder="Search"
                  bgColor="white"
                  style={{
                    outline: 0,
                    border: '1px solid #333',
                    maxW: '90%',
                  }}
                />
                <Flex
                  pos="absolute"
                  right="0"
                  top="0"
                  bottom="0"
                  alignItems="center"
                >
                  <AiOutlineSearch size={24} />
                </Flex>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};

export const SearchInput = () => {
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();
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
              initialValues={{ search: '' }}
              onSubmit={values => {
                history.push(`/search?name=${values.search}`);
              }}
            >
              {() => {
                return (
                  <Form>
                    <Flex alignItems="center" pos="relative" w="full" h="full">
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
                );
              }}
            </Formik>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
