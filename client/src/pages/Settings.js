import React from 'react';
import {
  Container,
  VStack,
  Flex,
  Box,
  HStack,
  Heading,
  Button,
} from '@chakra-ui/react';
import Card from '../components/Settings/Card';
import userApi from '../api/userApi';
import { useSelector } from 'react-redux';
import { FastField, Form, Formik } from 'formik';
import InputField from '../Fields/Inputs';
import * as yup from 'yup';

const Settings = () => {
  const info = useSelector(state => state.user.user);

  const infoSchema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập họ và tên'),
    address: yup.string().required('Vui lòng nhập địa chỉ'),
    phone: yup.string().required('Vui lòng nhập số điện thoại'),
  });

  const passwordSchema = yup.object().shape({
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu hiện tại.')
      .min(6, 'Tối thiếu 6 ký tự'),
    newPassword: yup
      .string()
      .required('Vui lòng nhập mật khẩu mới.')
      .min(6, 'Tối thiếu 6 ký tự'),
    confirm: yup
      .string()
      .required('Vui lòng xác nhận mật khẩu')
      .oneOf([yup.ref('newPassword'), null], 'Mật khẩu không khớp'),
  });

  return (
    <Container maxW="90%" w="full" minH="600px" mt={4}>
      <Flex direction={['column', 'column', 'row']}>
        <Card />

        <VStack ml={4} flex="3" spacing={4}>
          <Formik
            initialValues={{
              name: info.name,
              email: info.email,
              phone: info.phone,
              address: info.address,
            }}
            validationSchema={infoSchema}
            validateOnChange={false}
          >
            {props => {
              return (
                <Box w="full">
                  <Heading as="h5" mb={5} fontSize="24px">
                    Thông tin tài khoản
                  </Heading>
                  <Form>
                    <FastField
                      name="name"
                      component={InputField}
                      label="Họ và tên"
                      placeholder="Nhập họ và tên"
                    />
                    <FastField
                      name="email"
                      component={InputField}
                      label="Email"
                      placeholder="Nhập địa chỉ email"
                    />
                    <FastField
                      name="phone"
                      component={InputField}
                      label="Nhập số điện thoại"
                      placeholder="Nhập số điện thoại"
                    />
                    <FastField
                      name="address"
                      component={InputField}
                      label="Địa chỉ"
                      placeholder="Nhập số điện thoại"
                    />
                    <Flex w="full" justifyContent="flex-end">
                      <Button
                        type="submit"
                        mt={4}
                        bg="black"
                        color="white"
                        _hover={{
                          color: 'white',
                          bg: 'gray.600',
                        }}
                      >
                        Cập nhật
                      </Button>
                    </Flex>
                  </Form>
                </Box>
              );
            }}
          </Formik>

          <Formik
            initialValues={{
              password: '',
              newPassword: '',
              confirm: '',
            }}
            validationSchema={passwordSchema}
            validateOnChange={false}
          >
            {() => {
              return (
                <Box w="full">
                  <Form>
                    <FastField
                      name="password"
                      component={InputField}
                      label="Mật khẩu hiện tại"
                      placeholder="Nhập mật khẩu hiện tại"
                      type="password"
                    />

                    <HStack h="100px">
                      <FastField
                        name="newPassword"
                        component={InputField}
                        label="Mật khẩu  mới"
                        placeholder="Nhập mật khẩu mới"
                        type="password"
                      />
                      <FastField
                        name="confirm"
                        component={InputField}
                        label="Xác nhận mật khẩu mới"
                        placeholder="Xác nhận mật khẩu mới"
                        type="password"
                      />
                    </HStack>
                    <Flex w="full" justifyContent="flex-end">
                      <Button
                        type="submit"
                        mt={4}
                        bg="black"
                        color="white"
                        _hover={{
                          bg: 'gray.600',
                        }}
                      >
                        Đổi mật khẩu
                      </Button>
                    </Flex>
                  </Form>
                </Box>
              );
            }}
          </Formik>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Settings;
