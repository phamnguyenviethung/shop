import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { FastField, Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import InputField from '../../../Fields/Inputs';
import { useDispatch } from 'react-redux';
import { login } from '../../../actions/userActions';

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Hãy nhập một email')
      .required('Vui lòng nhập email.'),
    password: yup.string().required('Vui lòng nhập mật khẩu.').min(6),
  });

  const submitHandler = values => {
    const { email, password } = values;
    dispatch(login(email, password));
  };

  return (
    <Formik
      initialValues={formik.initialValues}
      validationSchema={validationSchema}
      onSubmit={values => submitHandler(values)}
    >
      {() => {
        const { email, password } = formik.values;
        return (
          <Flex
            justifyContent="space-between"
            direction="column"
            w={['50%', '20%']}
          >
            <Form mb={2}>
              <FastField
                name="email"
                component={InputField}
                label="Email"
                placeholder="Nhập địa chỉ email"
                bgColor="white"
                onChange={formik.handleChange}
                value={email}
              />

              <FastField
                name="password"
                component={InputField}
                label="Password"
                placeholder="Nhập password"
                bgColor="white"
                onChange={formik.handleChange}
                value={password}
              />
              <Button
                mt={6}
                borderRadius="4px"
                colorScheme="teal"
                type="submit"
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
