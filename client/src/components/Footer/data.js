import { FaFacebook } from 'react-icons/fa';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';

export const link = [
  {
    path: '/',
    label: 'Trang chủ',
  },
  {
    path: '/',
    label: 'Sản phẩm',
  },
  {
    path: '/',
    label: 'Đang giảm giá',
  },
  {
    path: '/',
    label: 'Hỗ trợ',
  },
];

export const info = [
  {
    link: '/',
    content: 'Facebook',
    icon: <FaFacebook size={16} />,
  },
  {
    link: null,
    content: '0703 162 716',
    icon: <AiFillPhone size={16} />,
  },
  {
    link: null,
    content: 'viethung01234@gmail.com',
    icon: <AiTwotoneMail size={16} />,
  },
];
