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
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CartIcon, CartIconDetails } from '../Cart/CartIcon';
import { useLocation } from 'react-router';
import checkPathName from '../../utils/checkPathName';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';

import { VscAccount } from 'react-icons/vsc';
import {
  AiOutlineMenu,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';
import userLogo from '../../assets/img/customer.png';
import { drawerItems } from './data';

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
                    <Accordion allowToggle w="full">
                      {drawerItems.map((item, key) => {
                        if (item.type === 'Link') {
                          return (
                            <Box
                              py={2}
                              px={4}
                              key={key}
                              w="full"
                              _hover={{ background: '#f5f5f5' }}
                              onClick={onClose}
                            >
                              <Link to={item.path}>
                                <Text>{item.label}</Text>
                              </Link>
                            </Box>
                          );
                        }

                        return (
                          <AccordionItem border="0">
                            <h2>
                              <AccordionButton _focus={{ outline: 0 }}>
                                <Box flex="1" textAlign="left">
                                  {item.label}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <VStack w="full">
                                <UnorderedList listStyleType="none" w="full">
                                  {item.list.map((listItem, key) => {
                                    return (
                                      <Link
                                        to={listItem.path}
                                        key={key}
                                        onClick={onClose}
                                      >
                                        <ListItem>{listItem.label}</ListItem>
                                      </Link>
                                    );
                                  })}
                                </UnorderedList>
                              </VStack>
                            </AccordionPanel>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </VStack>
                </Flex>
              </DrawerBody>

              <DrawerFooter
                px={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <AiOutlineFacebook size={20} />
                <AiOutlineInstagram size={20} />
                <AiOutlineTwitter size={20} />
                <AiOutlineYoutube size={20} />
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

        {isMobile ? (
          <Link to="/cart">
            <CartIcon cart={cart} />
          </Link>
        ) : (
          <CartIconDetails cart={cart} />
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
