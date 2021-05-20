import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { FastField, Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import InputField from '../../../Fields/Inputs';
import { register } from '../../../actions/userActions';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
  });

  const validationSchema = yup.object().shape({
    name: yup.string().required('Vui lòng điền trường này'),
    email: yup
      .string()
      .email('Hãy nhập một email')
      .required('Vui lòng nhập trường này'),
    password: yup
      .string()
      .required('Vui lòng nhập trường này')
      .min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    confirm: yup
      .string()
      .required('Vui lòng nhập trường này')
      .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
  });

  const submitHandler = values => {
    const { name, email, password } = values;

    dispatch(register(name, email, password));
  };
  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      w="full"
      backgroundColor="gray.200"
    >
      <Formik
        initialValues={formik.initialValues}
        validationSchema={validationSchema}
        onSubmit={values => submitHandler(values)}
      >
        {() => {
          const { name, email, password, confirm } = formik.values;

          return (
            <Flex
              justifyContent="space-between"
              direction="column"
              w={['50%', '20%']}
            >
              <Form mb={2}>
                <FastField
                  // required={true}
                  name="name"
                  component={InputField}
                  label="Họ và tên"
                  placeholder="Nhập họ và tên"
                  bgColor="white"
                  onChange={formik.handleChange}
                  value={name}
                />

                <FastField
                  // required={true}
                  name="email"
                  component={InputField}
                  label="Email"
                  placeholder="Nhập email"
                  bgColor="white"
                  onChange={formik.handleChange}
                  value={email}
                />

                <FastField
                  // required={true}
                  name="password"
                  component={InputField}
                  label="Password"
                  placeholder="Nhập password"
                  bgColor="white"
                  onChange={formik.handleChange}
                  value={password}
                />
                <FastField
                  // required={true}
                  name="confirm"
                  component={InputField}
                  label="Password"
                  placeholder="Nhập lại password"
                  bgColor="white"
                  onChange={formik.handleChange}
                  value={confirm}
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
