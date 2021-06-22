import { Flex, HStack, Heading, Badge, Container } from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import React, { useEffect, useState } from 'react';
import Options from './Options';
import { sortOptions } from './data';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { productPropsHandler, selectToQuery } from './helpers';
import { useHistory } from 'react-router-dom';
import { filter } from '../../actions/productAction';

const Filter = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    size: [],
    color: [],
    category: [],
  });
  const [select, setSelect] = useState([]);
  const data = useSelector(state => state.product.productList);
  const history = useHistory();
  const keyword = history.location.search;
  const badgeColor = ['green', 'red', 'yellow', 'blue'];

  useEffect(() => {
    const getInfo = () => {
      let size = [];
      let category = [];
      let color = [];

      data.forEach(i => {
        category.push(...i.categories);
        color.push(...i.color);
        size.push(...i.size);
      });

      return {
        size: productPropsHandler(size, 'size'),
        category: productPropsHandler(category),
        color: productPropsHandler(color, 'color'),
      };
    };
    const { size, category, color } = getInfo();
    setInfo({ size, category, color });
  }, [data]);
  useEffect(() => {
    const query =
      '?' +
      (keyword.slice(1).startsWith('name') ? keyword.slice(1) : '') +
      selectToQuery(select);

    dispatch(filter(query));
  }, [select, keyword, dispatch]);

  // Select Handler

  const selectHandle = (value, type) => {
    const selected = [...select];

    // Price replace
    if (type !== 'price' || selected.length === 0) {
      selected.push({
        type,
        value,
      });
    } else if (selected.filter(i => i.type === 'price').length > 0) {
      selected.forEach((i, index) => {
        if (i.type === 'price') {
          selected[index].value = value;
        }
      });
    } else {
      selected.push({
        type,
        value,
      });
    }

    setSelect(selected);
  };

  const unselectHandle = (value, type) => {
    const selected = [...select];

    selected.forEach((i, index) => {
      if (i.value === value) {
        selected[index] = undefined;
      }
    });

    const result = selected.filter(i => i !== undefined);
    setSelect(result);
  };
  return (
    <Container maxW="full">
      {select.length > 0 && (
        <Flex direction="column" mb={2}>
          <Heading as="h4" fontSize="2xl" mb={2} flex={1}>
            Bạn đã chọn
          </Heading>

          <Flex maxW={['full', '90%', '80%', '70%']} wrap="wrap">
            {select.map((i, key) => {
              return (
                <Badge
                  mr={4}
                  mb={2}
                  variant="solid"
                  colorScheme={
                    badgeColor[
                      key === 0 ? 0 : key === 1 ? 1 : key % 3 === 0 ? 3 : 2
                    ]
                  }
                  key={key}
                  fontSize="sm"
                  py={1}
                >
                  <HStack justifyContent="space-between">
                    <Text>{i.value}</Text>
                    <Text
                      as="label"
                      htmlFor={
                        i.type !== 'price' ? i.value.toLowerCase() : 'hide'
                      }
                      onClick={() => {
                        if (i.type === 'price') {
                          unselectHandle(i.value, i.type);
                        }
                      }}
                    >
                      <AiOutlineClose
                        size={14}
                        cursor="pointer"
                        style={{ fill: 'black' }}
                      />
                    </Text>
                  </HStack>
                </Badge>
              );
            })}
          </Flex>
        </Flex>
      )}

      <Flex
        mb={4}
        py={4}
        borderBottom="3.5px solid #333"
        direction={['column', 'row']}
      >
        <HStack flex="1" spacing="12px">
          <Options
            data={info}
            selectHandle={selectHandle}
            unselectHandle={unselectHandle}
            select={select}
          />
        </HStack>

        <Select
          placeholder="Sắp xếp"
          justifySelf="flex-end"
          maxW={['full', '20%']}
          mt={[2, 0]}
        >
          {sortOptions.map((item, key) => {
            return (
              <option value={item} key={key}>
                {item}
              </option>
            );
          })}
        </Select>
      </Flex>
    </Container>
  );
};

export default Filter;
