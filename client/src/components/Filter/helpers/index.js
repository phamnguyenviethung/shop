import queryString from 'query-string';
import { priceOptions } from '../data';

export const productPropsHandler = (arr, type) => {
  // Unique array
  let data = [];
  if (type === 'color') {
    const names = [];

    // Get value each color
    arr.forEach(i => {
      names.push(i.name);
    });

    // Unique values

    const colors = names.filter(
      (item, index, self) => self.indexOf(item) === index
    );

    // push to data
    colors.forEach(item => {
      data.push(item);
    });
  } else {
    data = arr.filter((item, index, self) => self.indexOf(item) === index);
  }

  // Sort sizes
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXL'];

  if (type === 'size') {
    const sortData = [];

    data.forEach(item => {
      const pos = sizes.indexOf(item);

      sortData[pos] = sizes[pos];
    });

    return sortData.filter(i => i !== undefined);
  }

  return data;
};

export const selectToQuery = data => {
  const queryObj = [];
  const qryString = [];
  let result = [];

  // Push key - value to queryObj
  data.forEach(i => {
    queryObj.push({
      [i.type]: i.value,
    });
  });

  // Stringify query
  queryObj.forEach(i => {
    if (!i.hasOwnProperty('price')) {
      qryString.push(queryString.stringify(i));
    } else {
      const match = priceOptions.filter(item => item[0] === i.price)[0];

      qryString.push(
        queryString.stringify({
          'price[gte]': match[1] * 1000,
          'price[lte]': match[2] * 1000,
        })
      );
    }
  });

  // Replace query operator -- push to data

  qryString.forEach(i => {
    const sliceStr = i.slice(0, i.indexOf('='));

    if (!sliceStr.startsWith('price')) {
      result.push(i.replace('=', '[in]='));
    } else {
      result.push(i);
    }
  });
  const colorMatch = result.join('&').match(/color/g);

  if (result.length > 0 && colorMatch) {
    if (colorMatch.length === 1)
      return (result = result.join('&').replace('.name[in]=', '.name='));
  }

  return result.join('&');
};
