import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import InputField from '../../../Fields/Inputs';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/userActions';

const Login = ({ toast }) => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Hãy nhập một email')
      .required('Vui lòng nhập email.'),
    password: yup.string().required('Vui lòng nhập mật khẩu.').min(6),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(login(values, toast));
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {formik => {
        return (
          <Flex justifyContent="space-between" direction="column" w="full">
            <Form mb={2}>
              <FastField
                name="email"
                component={InputField}
                label="Email"
                placeholder="Nhập địa chỉ email"
                bgColor="white"
                onChange={formik.handleChange}
              />

              <FastField
                name="password"
                component={InputField}
                label="Password"
                placeholder="Nhập password"
                bgColor="white"
                onChange={formik.handleChange}
                type="password"
              />
              <Button
                mt={6}
                borderRadius="4px"
                colorScheme="black"
                type="submit"
                w="full"
                variant="outline"
              >
                Đăng nhập
              </Button>
            </Form>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default Login;
