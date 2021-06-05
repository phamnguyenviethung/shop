import React from 'react';

import ProductDetail from '../components/Products/Details';

const Details = ({ match }) => {
  return <ProductDetail slug={match.params.id} />;
};

export default Details;
