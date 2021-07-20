import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  useToast,
  VStack,
  Text,
  Stack,
  Image,
  Center,
  Avatar,
} from '@chakra-ui/react';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import userApi from '../api/userApi';
import authApi from '../api/authApi';
import InputField from '../Fields/Inputs';
import { updateUserInfo } from '../actions/userActions';

const Settings = () => {
  const toast = useToast();
  const info = useSelector(state => state.user.user);
  const dispatch = useDispatch();

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

  const updateInfo = async data => {
    try {
      const user = await userApi.updateuserInfo(info.uid, data);
      dispatch(updateUserInfo(user));
      toast({
        title: 'Cập nhật thông tin thành công',
        status: 'success',
        position: 'bottom-right',
        isClosable: true,
        duration: 700,
        onCloseComplete: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra',
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
        duration: 1200,
      });
    }
  };

  const changePass = async data => {
    try {
      await authApi.changepasswod(data);
      toast({
        title: 'Đổi mật khẩu thành công',
        status: 'success',
        position: 'bottom-right',
        isClosable: true,
        duration: 700,
        onCloseComplete: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra',
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
        duration: 1200,
      });
    }
  };

  return (
    <Container maxW="90%" w="full" minH="600px" mt={4}>
      <Flex direction={['column', 'column', 'row']}>
        <Center flex="1">
          <Box
            maxW={'300px'}
            w={'full'}
            bg="white"
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Image
              h={'120px'}
              w={'full'}
              src={
                'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              }
              objectFit={'cover'}
            />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                size={'xl'}
                src={
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  {info.name}
                </Heading>
                <Text color={'gray.500'}>
                  {info.role === 'user' ? 'Thành Viên' : 'Quản trị viên'}{' '}
                </Text>
              </Stack>

              <Stack direction={'row'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>100</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Điểm
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>15</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Đơn hàng
                  </Text>
                </Stack>
              </Stack>

              <Button
                w={'full'}
                mt={8}
                bg="#151f21"
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Follow
              </Button>
            </Box>
          </Box>
        </Center>

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
            onSubmit={(data, e) => updateInfo(data, e)}
          >
            {() => {
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
            onSubmit={values => {
              changePass(values);
            }}
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
