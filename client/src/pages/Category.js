import { Center, Flex, Container, Badge } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import searchApi from '../api/searchApi';
import Products from '../components/Products/Products';
import Sort from '../components/Filter/Sort';
import { useSelector } from 'react-redux';
import faker from 'faker';
import NotFound from './NotFound';

const Category = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const sort = useSelector(state => state.filter.sort);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchApi.search(
          `?categories=${params.name}${sort}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params, sort]);

  const images = [
    'https://i.imgur.com/fWTC9bO.png',
    'https://i.imgur.com/qrBbR53.png',
    'https://i.imgur.com/RFBJZ9U.png',
  ];
  const randomImageIndex = faker.datatype.number({
    min: 0,
    max: images.length - 1,
  });

  return (
    <Container maxW="full" mt={2}>
      {data.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <Center maxW="full" pos="relative" mb={6}>
            <Container
              bgImage={`url(${images[randomImageIndex]})`}
              // bgPosition="center"
              bgSize="cover"
              bgRepeat="no-repeat"
              pt={['30%', '18%']}
              w={['90%', '60%']}
              maxW="full"
              opacity="0.65"
            ></Container>

            <Badge
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
              variant="solid"
              color="white"
              bgColor="black"
              fontSize="lg"
            >
              {params.name.toUpperCase()}
            </Badge>
          </Center>

          <Center>
            <Flex
              maxW="full"
              w="80%"
              justifyContent="flex-end"
              borderBottom="2px solid #333"
              pb={2}
            >
              <Sort maxW={['60%', '50%', '20%', '18%']} />
            </Flex>
          </Center>
          <Products hideTabs={true} list={data} />
        </>
      )}
    </Container>
  );
};

export default Category;
