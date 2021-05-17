import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import InputField from '../../../Fields/Inputs';

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: null,
    address: '',
    payment: '',
    note: '',
  };
  const validationSchema = yup.object().shape({});
  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      w="full"
      backgroundColor="gray.200"
    >
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {formikProps => {
          return (
            <Flex
              justifyContent="space-between"
              direction="column"
              w={['50%', '20%']}
            >
              <Form mb={2}>
                <FastField
                  // required={true}
                  name="user"
                  component={InputField}
                  label="Username"
                  placeholder="Nhập tên đăng nhập"
                  bgColor="white"
                />

                <FastField
                  // required={true}
                  name="password"
                  component={InputField}
                  label="Password"
                  placeholder="Nhập password"
                  bgColor="white"
                />
                <FastField
                  // required={true}
                  name="confirm"
                  component={InputField}
                  label="Password"
                  placeholder="Nhập lại password"
                  bgColor="white"
                />
                <Button
                  mt={6}
                  borderRadius="4px"
                  colorScheme="teal"
                  type="submit"
                >
                  Đăng ký
                </Button>
              </Form>
            </Flex>
          );
        }}
      </Formik>
    </Flex>
  );
};

export default Register;
