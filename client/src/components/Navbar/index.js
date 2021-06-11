import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/userActions';
import checkPathName from '../../utils/checkPathName';
import { CartIcon } from '../Cart/CartIcon';
import { navbarItems } from './data';
import { DrawerMobile } from './Drawer';
import Search from './SearchBox';

const Navbar = ({ cart }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const location = useLocation();

  const path = checkPathName(location.pathname);

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user.name);
  if (!path) {
    return null;
  }

  return (
    <>
      <Flex
        w="full"
        maxW="full"
        h="80px"
        alignItems="center"
        justifyContent={['space-between', 'space-between', 'space-around']}
        px={['4%', '2%', 0]}
      >
        {isMobile && <DrawerMobile />}

        <Box w="10%">
          <Link to="/">
            <Image
              src="https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png"
              alt="logo"
              justifySelf="center"
              maxW="inherit"
            />
          </Link>
        </Box>
        {!isMobile && (
          <Flex justifyContent="space-around" alignItems="center" minW="25%">
            {navbarItems.map((item, key) => {
              if (item.type === 'dropdown') {
                return (
                  <Menu key={key} autoSelect={false}>
                    <MenuButton
                      as={Button}
                      variant="unstyled"
                      fontWeight="700"
                      color="gray.600"
                      fontSize="18px"
                      textTransform="uppercase"
                      cursor="pointer"
                      _focus={{
                        boxShadow: 'none',
                      }}
                    >
                      <Flex align="center">
                        {item.label} <ChevronDownIcon />
                      </Flex>
                    </MenuButton>
                    <MenuList zIndex="99">
                      {item.list.map((item, key) => {
                        return (
                          <Link to={item.path} key={key}>
                            <MenuItem>{item.label}</MenuItem>
                          </Link>
                        );
                      })}
                    </MenuList>
                  </Menu>
                );
              }

              return (
                <Link to={item.path} key={key} px={2}>
                  <Button
                    variant="unstyled"
                    fontWeight="700"
                    color="gray.600"
                    fontSize="18px"
                    textTransform="uppercase"
                    _focus={{
                      boxShadow: 'none',
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Flex>
        )}

        <Flex justifyContent="space-around" align="center" mr={3}>
          <Search />
          {!isMobile && (
            <Menu placement="bottom-end" autoSelect="false">
              <MenuButton
                minW="auto"
                p={2}
                _focus={{
                  boxShadow: 'none',
                }}
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

          <Flex px={[0, 0, 2]}>
            <Link to="/cart">
              <CartIcon cart={cart} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
