import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  Box,
  Text,
} from '@chakra-ui/react';
import * as dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import formatCurrency from '../../utils/formatCurrency';

dayjs.extend(localizedFormat);

const OrderList = ({ data }) => {
  return (
    <Container maxW="full" w="full" mt={8} p={0}>
      <Text mb={2}>Đơn hàng của bạn</Text>
      <Box overflowX="auto">
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
                  <Td>{dayjs(item.createdAt).format('DD/MM/YYYY LTS')}</Td>
                  <Td>{formatCurrency(item.total)}</Td>
                  <Td> Đã thanh toán</Td>
                  <Td>Đã vận chuyển</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default OrderList;
