import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import searchApi from '../api/searchApi';
import Products from '../components//Products/Products';
import { Text, Flex } from '@chakra-ui/react';

const Search = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchApi.search(history.location.search);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [history.location.search]);
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="full"
        maxW="full"
        direction="column"
      >
        <Text fontSize="sm" color="gray.500" fontWeight="600">
          Có {data.length} kết quả liên quan tới{' '}
          {history.location.search.slice(
            history.location.search.indexOf('=') + 1
          )}
          .
        </Text>
      </Flex>
      <Products hideTabs={true} list={data} />
    </>
  );
};

export default Search;
