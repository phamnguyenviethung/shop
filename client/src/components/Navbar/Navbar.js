import React from 'react';
import {
  Flex,
  HStack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartIcon from '../Cart/CartIcon';
import { useLocation } from 'react-router';
import checkPathName from '../../utils/checkPathName';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';

import { VscAccount } from 'react-icons/vsc';
import { AiOutlineMenu } from 'react-icons/ai';
import userLogo from '../../assets/img/customer.png';

const Navbar = ({ cart }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const location = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const path = checkPathName(location.pathname);

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user.name);
  if (!path) {
    return null;
  }

  return (
    <Flex
      w="full"
      maxW="full"
      h="80px"
      alignItems="center"
      justifyContent={['space-between', 'space-between', 'space-around']}
      px={['4%', '2%', 0]}
    >
      {isMobile && (
        <HStack cursor="pointer">
          <AiOutlineMenu size={24} onClick={onOpen} />

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>

              <DrawerBody>
                <Flex direction="column" alignItems="center">
                  <VStack>
                    <Image src={userLogo} alt="user logo" w="80px" h="80px" />
                    <Text>Hello!</Text>
                    {user ? (
                      <Text>{user}</Text>
                    ) : (
                      <HStack>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                      </HStack>
                    )}
                  </VStack>
                  <Divider my={4} />
                  <VStack w="full">
                    <UnorderedList listStyleType="none" w="full">
                      <ListItem>Home</ListItem>
                      <ListItem>Shop</ListItem>
                      <ListItem>Collection</ListItem>
                      <ListItem>Blog</ListItem>
                    </UnorderedList>
                  </VStack>
                </Flex>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </HStack>
      )}
      <Link to="/">
        <Text
          textTransform="lowercase"
          fontWeight="700"
          fontSize="lg"
          fontFamily="Poppins, sans-serif"
        >
          thewalkingfish
        </Text>
      </Link>
      {!isMobile && (
        <HStack>
          <Link to="/" px={2}>
            Home
          </Link>
          <Link to="/cart" px={2}>
            Cart
          </Link>
          <Link to="/admin" px={2}>
            Admin
          </Link>
          <Link to="/checkout" px={2}>
            Checkout
          </Link>
        </HStack>
      )}

      <Flex justifyContent="space-between" align="center" mr={3}>
        {!isMobile && (
          <Menu>
            <MenuButton
              as={Button}
              bgColor="white"
              _active={{ background: 'white' }}
              _hover={{ background: 'white' }}
            >
              <VscAccount size={24} />
            </MenuButton>

            {user ? (
              <MenuList>
                <MenuItem>My Account</MenuItem>
                <MenuItem onClick={() => dispatch(signout())}>
                  Sign out
                </MenuItem>
              </MenuList>
            ) : (
              <MenuList>
                <Link to="/login">
                  <MenuItem>Login</MenuItem>
                </Link>

                <Link to="/register">
                  <MenuItem>Register</MenuItem>
                </Link>
              </MenuList>
            )}
          </Menu>
        )}

        <Link to="/cart">
          <CartIcon length={cart} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
