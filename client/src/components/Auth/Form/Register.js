import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import InputField from '../../../Fields/Inputs';
import { register } from '../../../actions/userActions';
import { useDispatch } from 'react-redux';

const Register = ({ toast }) => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup.string().required('Vui lòng điền trường này'),
    email: yup
      .string()
      .email('Hãy nhập một email')
      .required('Vui lòng nhập email'),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Mật khẩu tối thiểu 6 ký tự'),
    confirm: yup
      .string()
      .required('Vui lòng xác nhận mật khẩu')
      .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
  });

  const submitHandler = values => {
    dispatch(register(values, toast));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirm: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => submitHandler(values)}
      validateOnChange={false}
    >
      {formik => {
        const { name, email, password, confirm } = formik.values;

        return (
          <Flex justifyContent="space-between" direction="column" w="full">
            <Form mb={2}>
              <FastField
                name="name"
                component={InputField}
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                bgColor="white"
                onChange={formik.handleChange}
                value={name}
              />

              <FastField
                name="email"
                component={InputField}
                label="Email"
                placeholder="Nhập email"
                bgColor="white"
                onChange={formik.handleChange}
                value={email}
                validateOnChange
              />

              <FastField
                name="password"
                component={InputField}
                label="Password"
                placeholder="Nhập password"
                bgColor="white"
                onChange={formik.handleChange}
                value={password}
                type="password"
              />
              <FastField
                name="confirm"
                component={InputField}
                label="Password"
                placeholder="Nhập lại password"
                bgColor="white"
                onChange={formik.handleChange}
                value={confirm}
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
                Đăng ký
              </Button>
            </Form>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default Register;
