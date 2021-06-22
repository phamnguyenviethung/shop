import { Image } from '@chakra-ui/image';
import {
  Container,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  HStack,
  UnorderedList,
} from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { link, info } from './data';

const Footer = () => {
  return (
    <Container
      maxW="full"
      w="full"
      h={['full', 'full', 'full', '400px']}
      bgColor="gray.50"
      py={12}
    >
      <Container maxW="full" w={['full', '90%']} my={4} py={2}>
        <SimpleGrid columns={[1, 2, 2, 4]} spacing="40px">
          <Flex
            height="full"
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Heading as="h4" fontSize="xl" fontWeight="600" mb={2}>
              Giới thiệu
            </Heading>
            <Text fontSize="md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              explicabo vitae culpa autem nesciunt libero enim veritatis
              repellendus accusantium, quis, provident corrupti deserunt
              consequatur minima nostrum in animi architecto natus?
            </Text>
            <Image
              src="https://flone.reactdemo.hasthemes.com/assets/img/logo/logo.png"
              alt="logo"
              mt={6}
              h="50px"
              w="150px"
              objectFit="contain"
            />
          </Flex>
          <Flex height="full" direction="column">
            <Heading as="h4" fontSize="xl" fontWeight="600" mb={2}>
              Liên kết
            </Heading>
            <UnorderedList listStyleType="none" m={0}>
              {link.map((item, key) => {
                return (
                  <Link to={item.path} key={key}>
                    <ListItem>{item.label}</ListItem>
                  </Link>
                );
              })}
            </UnorderedList>
          </Flex>

          <Flex height="full" direction="column">
            <Heading as="h4" fontSize="xl" fontWeight="600" mb={2}>
              Liên Kết
            </Heading>
            <UnorderedList listStyleType="none" m={0}>
              {link.map((item, key) => {
                return (
                  <Link to={item.path} key={key}>
                    <ListItem>{item.label}</ListItem>
                  </Link>
                );
              })}
            </UnorderedList>
          </Flex>

          <Flex height="full" direction="column">
            <Heading as="h4" fontSize="xl" fontWeight="600" mb={2}>
              Liên hệ
            </Heading>
            <UnorderedList listStyleType="none" m={0}>
              {info.map((item, key) => {
                if (item.link === null) {
                  return (
                    <HStack key={key}>
                      {item.icon}
                      <ListItem>{item.content}</ListItem>
                    </HStack>
                  );
                }

                return (
                  <Link to={item.link} key={key}>
                    <HStack>
                      {item.icon}
                      <ListItem>{item.content}</ListItem>
                    </HStack>
                  </Link>
                );
              })}
            </UnorderedList>
          </Flex>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Footer;
