import React from 'react';
import { ListItem, HStack, UnorderedList, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiEditLine } from 'react-icons/ri';

const UserInfo = () => {
  const user = useSelector(state => state.user.user);

  const exclude = ['accessToken', 'refreshToken', 'role', 'uid'];

  return (
    <UnorderedList listStyleType="none">
      {Object.keys(user).map(
        (item, key) =>
          !exclude.includes(item) && <ListItem key={key}>{user[item]}</ListItem>
      )}
      <ListItem color="blue.400">
        <Link to="/settings">
          <HStack>
            <RiEditLine />
            <Text>Chỉnh sửa</Text>
          </HStack>
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default UserInfo;
