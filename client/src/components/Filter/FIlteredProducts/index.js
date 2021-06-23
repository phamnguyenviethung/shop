import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Container, SimpleGrid, Heading, Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import searchApi from '../../../api/searchApi';

const FilteredProducts = () => {
  const [data, setData] = useState([]);
  const select = useSelector(state => state.filter.select);
  const sort = useSelector(state => state.filter.sort) || '&sort=-createdAt';
  const query = select + sort;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchApi.search(query);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <Container maxW="full" mt={10}>
      {data.length === 0 ? (
        <Center w="full" h="300px">
          <Heading fontSize={['xl', '3xl']}>
            Không tìm thấy sản phẩm nào...
          </Heading>
        </Center>
      ) : (
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {data.map((item, key) => {
            return <Product key={key} item={item} />;
          })}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default FilteredProducts;
