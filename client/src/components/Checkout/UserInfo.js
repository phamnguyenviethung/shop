import React from 'react';
import {
  FormControl,
  FormLabel,
  Flex,
  Textarea,
  Heading,
} from '@chakra-ui/react';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../Fields/Inputs/';
import SelectField from '../../Fields/Select/';
import { paymentOptions } from './paymentOptions';

const UserInfo = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  return (
    <Flex direction="column" flex="2">
      <Heading as="h4" size="md" color="gray.500" fontWeight="600" mb={4}>
        Billing Details
      </Heading>
      <Formik initialValues={initialValues}>
        {formikProps => {
          return (
            <Flex direction="column">
              <Form mb={2}>
                <FastField
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

                <FastField
                  name="address"
                  component={InputField}
                  label="Địa chỉ"
                  placeholder="Nhập địa chỉ "
                />
                <FastField
                  name="phone"
                  component={InputField}
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại "
                />

                <FastField
                  name="payment"
                  component={SelectField}
                  label="Phương thức thanh toán"
                  placeholder="Chọn phương thức"
                  options={paymentOptions}
                />
              </Form>
            </Flex>
          );
        }}
      </Formik>

      {/* <FormControl id="country">
        <FormLabel>Phương thức thanh toán</FormLabel>
        <Select placeholder="Chọn phương thức">
          <option>Thanh toán khi giao hàng</option>
          <option>Thanh toán qua ví MOMO</option>
        </Select>
      </FormControl> */}
      <Heading as="h4" size="sm" color="gray.500" fontWeight="600" my={2}>
        Thông tin thêm
      </Heading>
      <FormControl id="note">
        <FormLabel mb={2}>Note</FormLabel>
        <Textarea
          type="note"
          size="lg"
          placeholder="Notes about your delivery, time..."
        />
      </FormControl>
    </Flex>
  );
};

export default UserInfo;
