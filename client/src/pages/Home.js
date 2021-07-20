import React, { useEffect } from 'react';
import SlideFeatures from '../components/Features/Slide';
// import PostFeatures from '../components/Features/Post';
import Banner from '../components/Ads/Image';
import Products from '../components/Products/Products';
import Carousel from '../components/Carousel';
import ProductSlider from '../components/Widget/ProductSlider';
import { getProductList } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import lodash from 'lodash';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.productList) || [];
  const shuffleData = lodash.shuffle(products);

  useEffect(() => {
    const getList = () => {
      dispatch(getProductList(6));
    };
    getList();
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <SlideFeatures />
      <Products />
      <Banner />
      <ProductSlider data={shuffleData} heading="Có thể bạn thích" />
      {/* <PostFeatures /> */}
    </>
  );
};

export default Home;
