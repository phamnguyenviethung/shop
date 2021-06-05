export default function formatCurrency(number) {
  if (typeof number === 'undefined') {
    return 0;
  }

  return number.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}
