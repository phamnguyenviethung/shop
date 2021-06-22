import React from 'react';
import Option from './Option';
import { priceOptions } from '../data';

const Options = ({ data, selectHandle, unselectHandle, select }) => {
  const { size, color, category } = data;
  return (
    <>
      <Option
        label="Giá"
        data={priceOptions}
        type="price"
        selectHandle={selectHandle}
        unselectHandle={unselectHandle}
        select={select}
      />
      <Option
        label="Size"
        type="size"
        data={size}
        selectHandle={selectHandle}
        unselectHandle={unselectHandle}
        select={select}
      />
      <Option
        label="Color"
        type="color.name"
        data={color}
        selectHandle={selectHandle}
        unselectHandle={unselectHandle}
        select={select}
      />
      <Option
        label="Category"
        type="categories"
        data={category}
        selectHandle={selectHandle}
        unselectHandle={unselectHandle}
        select={select}
      />
    </>
  );
};

export default Options;
