import React from 'react';
import { sort } from '../../actions/productAction';
import { sortOptions } from './data';
import { useDispatch } from 'react-redux';
import { Select } from '@chakra-ui/react';
import { BiSortUp } from 'react-icons/bi';

const Sort = ({ maxW = ['full', '20%', '15%'] }) => {
  const dispatch = useDispatch();
  return (
    <Select
      placeholder="Sắp xếp"
      icon={<BiSortUp />}
      iconSize="lg"
      justifySelf="flex-end"
      maxW={maxW}
      mt={[2, 0]}
      onChange={e => dispatch(sort(e.target.value))}
      border="2px solid #333"
    >
      {sortOptions.map((item, key) => {
        return (
          <option value={item[1]} key={key}>
            {item[0]}
          </option>
        );
      })}
    </Select>
  );
};

export default Sort;
