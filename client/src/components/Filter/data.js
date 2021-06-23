export const priceOptions = [
  ['Dưới 50.000đ', 0, 50],
  ['50.000đ - 200.000đ', 50, 200],
  ['200.000đ - 500.000đ', 200, 500],
  ['Trên 500.000đ', 500, 9999999999999],
];

export const sortOptions = [
  ['Tên: A - Z', 'name'],
  ['Tên: Z - A', '-name'],
  ['Giá: Tăng dần', 'price'],
  ['Giá: Giảm dần', '-price'],
  ['Mới đến Cũ', '-createdAt'],
  ['Cũ đến Mới', 'createdAt'],
];
