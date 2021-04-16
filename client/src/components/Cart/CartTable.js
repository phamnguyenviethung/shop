import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { removeFromCart, increase, decrease } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';

const CartTable = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Tên</Th>
          <Th>Số lượng</Th>
          <Th isNumeric>Chức năng</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, key) => {
          return (
            <Tr key={key}>
              <Td>{item.stickerName}</Td>
              <Td>{item.count}</Td>
              <Td isNumeric>
                <Button onClick={() => dispatch(increase(item))}>+</Button>
                <Button
                  onClick={() =>
                    item.count === 1
                      ? dispatch(removeFromCart(item))
                      : dispatch(decrease(item))
                  }
                >
                  -
                </Button>
                <Button onClick={() => dispatch(removeFromCart(item))}>
                  x
                </Button>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default CartTable;
