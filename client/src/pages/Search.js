import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import searchApi from '../api/searchApi';
import Products from '../components/Products/Products';

const Search = () => {
  const history = useHistory();
  const query = history.location.search;
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const search = async () => {
      try {
        const data = await searchApi.search(query);
        setSearch(data);
      } catch (error) {
        console.log('lỗi', error);
      }
    };
    search();
  }, []);

  return <Products list={search} hideTabs={true} />;
};

export default Search;
