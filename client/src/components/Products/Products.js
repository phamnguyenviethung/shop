import React from 'react';
import { Container } from '@chakra-ui/react';
import Product from './Product/Product';
import { useSelector } from 'react-redux';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Products = ({ list, hideTabs }) => {
  const products = useSelector(state => state.product);
  const data = list || products;
  const discount = data.filter(item => item.discount > 0);

  if (hideTabs) {
    return (
      <Container className="row" maxW="full">
        {data.map((item, key) => {
          return (
            <Product
              key={key}
              name={item.name}
              thumb={item.thumb}
              price={item.price}
              item={item}
            />
          );
        })}
      </Container>
    );
  }

  return (
    <>
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
            <Container className="row" maxW="full">
              {data.map((item, key) => {
                return (
                  <Product
                    key={key}
                    name={item.name}
                    thumb={item.thumb}
                    price={item.price}
                    item={item}
                  />
                );
              })}
            </Container>
          </TabPanel>

          <TabPanel w="full" maxW="full" mt={10}>
            <Container className="row" maxW="full">
              {discount.map((item, key) => {
                return (
                  <Product
                    key={key}
                    name={item.name}
                    thumb={item.thumb}
                    price={item.price}
                    item={item}
                  />
                );
              })}
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Products;
