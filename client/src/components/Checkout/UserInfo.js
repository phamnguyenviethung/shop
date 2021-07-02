import React from 'react';

import { Button, Flex, Heading } from '@chakra-ui/react';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../Fields/Inputs/';
import SelectField from '../../Fields/Select/';
import TextareaField from '../../Fields/Textarea/';
import { paymentOptions } from './paymentOptions';
import * as yup from 'yup';

import orderApi from '../../api/orderApi';

const UserInfo = ({ data }) => {
  const cartItems = [...data.cartItems];

  const initialValues = {
    name: '',
    email: '',
    phone: null,
    address: '',
    payment: '',
    note: '',
  };

  const createOrder = async values => {
    try {
      // Xóa những key - value không cần thiết
      const exclueKey = ['quantity', 'slug'];
      cartItems.forEach(i => {
        exclueKey.forEach(key => delete i[key]);
      });

      const { name, address, email, phone, payment, note } = values;

      const orderInfo = {
        isPaid: false,
        isDelivered: false,
        deliveredAt: Date.now(),
        products: cartItems,
        fullname: name,
        address,
        email,
        phone,
        payment,
        note,
        shipping: 0,
        ...data.price,
      };

      await orderApi.create(orderInfo);
      alert('thanh cong');
    } catch (error) {
      console.log('cannot create order', error);
    }
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập họ tên. '),
    phone: yup.number().required().nullable(),
    email: yup.string().email().required('Vui lòng nhập email.'),
    payment: yup.string().required('Vui lòng chọn phương thức thanh toán. '),
    // address: yup.required(),
  });

  return (
    <Flex direction="column" flex="2">
      <Heading as="h4" size="md" color="gray.500" fontWeight="600" mb={4}>
        Billing Details
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log('submit', values)}
      >
        {formikProps => {
          const { values } = formikProps;
          // console.log({ values, errors, touched });
          return (
            <Flex direction="column">
              <Form mb={2}>
                <Flex justifyContent="space-between">
                  <FastField
                    // required={true}
                    maxW="94%"
                    name="name"
                    component={InputField}
                    label="Họ và tên"
                    placeholder="Nhập họ và tên!"
                  />

                  <FastField
                    // required={true}
                    name="email"
                    component={InputField}
                    label="Email"
                    placeholder="Nhập email"
                  />
                </Flex>

                <FastField
                  // required={true}
                  name="phone"
                  component={InputField}
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại "
                />

                <FastField
                  name="address"
                  component={InputField}
                  label="Địa chỉ"
                  placeholder="Nhập địa chỉ "
                />

                <FastField
                  name="payment"
                  component={SelectField}
                  label="Phương thức thanh toán"
                  placeholder="Chọn phương thức"
                  options={paymentOptions}
                />
                <FastField
                  name="note"
                  component={TextareaField}
                  label="Thông tin thêm"
                  placeholder="Note something for us..."
                />
                <Flex w="full" justifyContent="flex-end">
                  <Button
                    mt={6}
                    borderRadius="4px"
                    colorScheme="teal"
                    type="submit"
                    onClick={() => createOrder(values)}
                  >
                    Place Order
                  </Button>
                </Flex>
              </Form>
            </Flex>
          );
        }}
      </Formik>
    </Flex>
  );
};

export default UserInfo;
