import React, { useEffect } from 'react';
import Features from '../components/Features/Features';
import Products from '../components/Products/Products';
import Slide from '../components/Slide/Slide';
import { getProductList } from '../actions/productAction';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getList = async () => {
      await dispatch(getProductList());
    };
    getList();
  }, []);
  return (
    <>
      <Slide />
      <Features />
      <Products />
    </>
  );
};

export default Home;
