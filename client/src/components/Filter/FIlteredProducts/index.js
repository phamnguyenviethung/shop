import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import searchApi from '../../../api/searchApi';

const FilteredProducts = () => {
  const [data, setData] = useState([]);
  const query = useSelector(state => state.filter.select) || '';

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
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
        {data.map((item, key) => {
          return <Product key={key} item={item} />;
        })}
      </SimpleGrid>
    </Container>
  );
};

export default FilteredProducts;
