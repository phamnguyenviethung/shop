import { Image } from '@chakra-ui/image';
import {
  HStack,
  Text,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Divider,
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';

import React from 'react';
import { Link } from 'react-router-dom';
import { drawerItems } from './data';

import {
  AiOutlineMenu,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import userLogo from '../../assets/img/customer.png';

export const DrawerMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector(state => state.user.user.name);
  return (
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
                      <AccordionItem border="0" key={key}>
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

          <DrawerFooter px={2} justifyContent="flex-start" alignItems="center">
            <AiOutlineFacebook size={20} />
            <AiOutlineInstagram size={20} />
            <AiOutlineTwitter size={20} />
            <AiOutlineYoutube size={20} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};
