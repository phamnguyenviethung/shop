import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  Text,
} from '@chakra-ui/react';

const OrderList = ({ data }) => {
  return (
    <Container maxW="full" w="full" mt={8} p={0}>
      <Text mb={2}>Đơn hàng của bạn</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Đơn hàng #</Th>
            <Th>Ngày đặt</Th>
            <Th>Thành tiền</Th>
            <Th>Thanh toán</Th>
            <Th>Vận chuyển</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, key) => {
            return (
              <Tr key={key}>
                <Td>#{item.code}</Td>
                <Td>{item.deliveredAt}</Td>
                <Td>{item.total}</Td>
                <Td> Đã thanh toán</Td>
                <Td>Đã vận chuyển</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};

export default OrderList;
