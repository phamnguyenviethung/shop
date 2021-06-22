import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FilteredProducts from '../components/Filter/FIlteredProducts';
import Filter from '../components/Filter';

const Shop = () => {
  return (
    <>
      <Breadcrumb label="Shop" path="/shop" />
      <Filter />
      <FilteredProducts />
    </>
  );
};

export default Shop;
