import React from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import Product from './Product/Product';
import { useSelector } from 'react-redux';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ProductsListGridLoading from '../shared/Loading/ProductsListGridLoading';

const Products = ({ list, hideTabs, item = 6 }) => {
  const products = useSelector(state => state.product.productList);
  const data = list || products || [];
  const discount = data.filter(item => item.discount > 0);
  const loading = useSelector(state => state.product.loading);

  if (hideTabs) {
    return (
      <Container maxW="full" mt={10}>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
          {data.map((item, key) => {
            return <Product key={key} item={item} />;
          })}
        </SimpleGrid>
      </Container>
    );
  }

  return (
    <>
      {loading ? (
        <Container maxW="full" my={10}>
          <ProductsListGridLoading item={item} />
        </Container>
      ) : (
        <Tabs align="center" variant="unstyled">
          <TabList border="0">
            <Tab
              _selected={{
                fontWeight: 'bold',
              }}
              color="gray.700"
              fontSize="md"
              _focus={{
                boxShadow: 'none',
              }}
            >
              New Arrival
            </Tab>
            <Tab
              _selected={{
                fontWeight: 'bold',
              }}
              color="gray.700"
              fontSize="md"
              _focus={{
                boxShadow: 'none',
              }}
            >
              Sale off
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel w="full" maxW="full" mt={10} p={0}>
              <Container maxW="full">
                <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
                  {data.map((item, key) => {
                    return <Product key={key} item={item} />;
                  })}
                </SimpleGrid>
              </Container>
            </TabPanel>

            <TabPanel w="full" maxW="full" mt={10}>
              <Container maxW="full">
                <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
                  {discount.map((item, key) => {
                    return <Product key={key} item={item} />;
                  })}
                </SimpleGrid>
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default Products;
