export const navbarItems = [
  {
    type: 'link',
    path: '/shop',
    label: 'Shop',
    icons: null,
  },
  {
    type: 'dropdown',
    path: '/category/top',
    label: 'TOP',
    icons: null,
    list: [
      {
        path: '/category/shirt',
        label: 'Shirt',
      },
      {
        path: '/category/Jacket',
        label: 'Jacket',
      },
    ],
  },

  {
    type: 'dropdown',
    path: '/category/bottom',
    label: 'BOTTOM',
    icons: null,
    list: [
      {
        path: '/category/jeans',
        label: 'Jeans',
      },
      {
        path: '/category/Pants',
        label: 'Pants',
      },
    ],
  },
  {
    type: 'link',
    path: '/collection',
    label: 'Collection',
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
