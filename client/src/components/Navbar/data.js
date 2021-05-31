export const navbarItems = [
  {
    path: '/',
    label: 'Home',
    icons: null,
  },
  {
    path: '/cart',
    label: 'Cart',
    icons: null,
  },
  {
    path: '/checkout',
    label: 'Checkout',
    icons: null,
  },
];

export const drawerItems = [
  {
    type: 'Link',
    path: '/admin',
    label: 'Home',
  },
  {
    type: 'Dropdown',
    label: 'Shop',
    list: [
      {
        path: '/',
        label: 'T-shirt',
      },
      {
        path: '/',
        label: 'Jean',
      },
      {
        path: '/',
        label: 'Hoodie',
      },
      {
        path: '/',
        label: 'Jacket',
      },
    ],
  },
  {
    type: 'Dropdown',
    label: 'Collection',
    list: [
      {
        path: '/',
        label: 'Winter',
      },
      {
        path: '/',
        label: 'Summer',
      },
      {
        path: '/',
        label: 'New year',
      },
    ],
  },
  {
    type: 'Link',
    path: '/',
    label: 'Blog',
  },
];
