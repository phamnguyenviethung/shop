import queryString from 'query-string';

export default function uniqueQuery(query, newQuery) {
  let result = {};
  console.log(query);

  // Nếu newQuery và query đều có key giống nhau
  for (let i in query) {
    if (newQuery.hasOwnProperty(i)) {
      Object.assign(result, { [i]: newQuery[i] });
    }
  }

  // Nếu query không có key giống newQuery
  for (let i in newQuery) {
    if (!query.hasOwnProperty(i)) {
      Object.assign(result, { [i]: query[i] });
    }
  }

  return queryString.stringify(result);
}
