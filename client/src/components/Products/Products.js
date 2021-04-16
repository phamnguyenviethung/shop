import React, { useState, useEffect } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import productsApi from '../../api/productsApi';
import Product from './Product/Product';

const Products = () => {
  const [producstList, setProducstList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      try {
        const params = {};
        const response = await productsApi.getAll(params);
        setProducstList(response);
      } catch (error) {
        console.log('Failed to fetch products list', error);
      }
    };
    getProductList();
  }, []);
  return (
    <Container w="full" maxW="full" mt={6}>
      <Heading as="h2" textAlign="center" mb={14}>
        Our Products
      </Heading>
      <Product data={producstList} />
    </Container>
  );
};

export default Products;
