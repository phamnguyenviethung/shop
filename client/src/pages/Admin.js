import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import {
  FormControl,
  FormLabel,
  Heading,
  Container,
  Input,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import productsApi from '../api/productsApi';

const Admin = () => {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImg, setProductImg] = useState('');

  const [productsList, setProductsList] = useState([]);

  const [newProductName, setNewProductName] = useState('');
  const [newProductQuantity, setNewProductQuantity] = useState('');
  const [newProductImg, setNewProductImg] = useState('');

  const addNewProduct = async () => {
    try {
      const params = {
        name: productName,
        quantity: productQuantity,
        thumb: productImg,
      };
      await productsApi.addNew(params);

      Swal.fire({
        title: 'Thành Công!',
        text: 'Sản phẩm mới đã được thêm !!!',
        icon: 'success',
        confirmButtonText: 'Ok',
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      console.log('Cannot add new product', error);
    }
  };

  const updateProduct = async id => {
    try {
      const params = {
        id,
        newProductName,
        newProductQuantity,
        newProductImg,
      };
      await productsApi.update(params);
    } catch (error) {
      console.log('Cannot Update Product', error);
    }
  };

  const deleteProduct = async id => {
    try {
      await productsApi.delete(id);
    } catch (error) {
      console.log('Cannot Delete Product', error);
    }
  };

  useEffect(() => {
    const getProductList = async () => {
      try {
        const params = {};
        const response = await productsApi.getAll(params);
        setProductsList(response);
      } catch (error) {
        console.log('Failed to fetch products list', error);
      }
    };
    getProductList();
  }, []);

  return (
    <Container w="full">
      <Heading as="h2" textAlign="center" my={4}>
        Admin
      </Heading>
      {/* Add new product */}
      <FormControl id="adminForm" isRequired>
        <FormLabel>Tên</FormLabel>
        <Input
          placeholder="Name"
          mb={4}
          onChange={e => {
            setProductName(e.target.value);
          }}
          value={productName}
        />
        <FormLabel>Số lượng</FormLabel>
        <Input
          type="number"
          placeholder="Nhập số lượng"
          mb={4}
          onChange={e => {
            setProductQuantity(e.target.value);
          }}
          value={productQuantity}
        />
        <FormLabel>Ảnh</FormLabel>
        <Input
          placeholder="Give me the link..."
          mb={4}
          onChange={e => {
            setProductImg(e.target.value);
          }}
          value={productImg}
        />
        <Button w="full" onClick={addNewProduct}>
          Add new
        </Button>
      </FormControl>
      {/* Product List */}
      <Heading as="h3" textAlign="center" my={6}>
        Products Manage
      </Heading>

      {productsList.map((item, key) => {
        return (
          <Box
            my={4}
            border="solid"
            borderColor="black.200"
            py={10}
            px={12}
            key={key}
          >
            <Text fontSize="2xl" align="center" mb={4} color="green.500">
              {item.name}
            </Text>
            <FormControl>
              <FormLabel>Tên</FormLabel>
              <Input
                value={newProductName}
                placeholder={item.name}
                mb={4}
                onChange={e => {
                  setNewProductName(e.target.value);
                }}
              />
              <FormLabel>Số lượng</FormLabel>
              <Input
                value={newProductQuantity}
                placeholder={item.quantity}
                mb={4}
                onChange={e => {
                  setNewProductQuantity(e.target.value);
                }}
              />
              <FormLabel>Link ảnh</FormLabel>

              <Input
                value={newProductImg}
                placeholder={item.thumb}
                mb={4}
                onChange={e => {
                  setNewProductImg(e.target.value);
                }}
              />
              <Button w="full" mb={2} onClick={() => updateProduct(item._id)}>
                Update
              </Button>
              <Button w="full" onClick={() => deleteProduct(item._id)}>
                Delete
              </Button>
            </FormControl>
          </Box>
        );
      })}
    </Container>
  );
};

export default Admin;
