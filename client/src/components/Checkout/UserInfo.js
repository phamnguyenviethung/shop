import React from 'react';

import { Button, Flex, Heading, useToast } from '@chakra-ui/react';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../Fields/Inputs/';
import SelectField from '../../Fields/Select/';
import TextareaField from '../../Fields/Textarea/';
import { paymentOptions } from './paymentOptions';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import orderApi from '../../api/orderApi';
import { clearCart } from '../../actions/cartActions';

const UserInfo = ({ cart }) => {
  const toast = useToast();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const createOrder = async (info, reset) => {
    try {
      // Xóa những key - value không cần thiết
      const exclueKey = ['quantity', '_id'];
      cart.cartItems.forEach(i => {
        exclueKey.forEach(key => delete i[key]);
      });

      const { name, address, email, phone, payment, note } = info;

      const orderInfo = {
        products: cart.cartItems,
        fullname: name,
        address,
        email,
        uid: user.user.uid,
        phone,
        payment,
        note,
        shipping: 0,
        ...cart.price,
      };

      await orderApi.create(orderInfo);

      toast({
        title: 'Đặt hàng thành công',
        status: 'success',
        position: 'bottom-right',
        isClosable: true,
        duration: 1200,
      });
      dispatch(clearCart());
      reset();
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra...',
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
        duration: 1200,
      });
    }
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập họ tên. '),
    phone: yup.number().required('Vui lòng nhập số điện thoại.').nullable(),
    email: yup.string().email().required('Vui lòng nhập email.'),
    payment: yup.string().required('Vui lòng chọn phương thức thanh toán. '),
    address: yup.string().required('Vui lòng nhập địa chỉ'),
  });

  return (
    <Flex direction="column" flex="2">
      <Heading as="h4" size="md" color="gray.500" fontWeight="600" mb={4}>
        Thông tin đơn hàng
      </Heading>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          address: '',
          payment: '',
          note: '',
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={(values, e) => createOrder(values, e.resetForm)}
      >
        {() => {
          return (
            <Flex direction="column">
              <Form mb={2}>
                <Flex justifyContent="space-between">
                  <FastField
                    maxW="94%"
                    name="name"
                    component={InputField}
                    label="Họ và tên"
                    placeholder="Nhập họ và tên!"
                  />

                  <FastField
                    name="email"
                    component={InputField}
                    label="Email"
                    placeholder="Nhập email"
                  />
                </Flex>

                <FastField
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
                  >
                    Đặt hàng
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
