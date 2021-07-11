const lodash = require("lodash");
const faker = require("faker");

module.exports = (length = 3, startWith = 11) => {
  const data = [];

  // Random number
  for (let i = 0; i < length; i++) {
    data.push(
      faker.datatype.number({
        min: 0,
        max: 9,
      })
    );

    data.push(
      faker.random.alpha({
        count: 1,
        upcase: true,
      })
    );
  }

  const result = lodash.shuffle(data);
  result.unshift(startWith);

  return result.join("").toUpperCase();
};
