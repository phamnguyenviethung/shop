import React, { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Checkbox,
  RadioGroup,
  Radio,
  CheckboxGroup,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';

const Option = ({
  label,
  data,
  type,
  selectHandle,
  unselectHandle,
  select,
}) => {
  const [price, setPrice] = useState([]);
  const hasPrice = select.filter(i => i.type === 'price').length > 0;
  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          variant="unstyled"
          rightIcon={<ChevronDownIcon />}
          fontWeight="700"
          fontSize="lg"
          _focus={{
            boxShadow: 'none',
          }}
        >
          {label}
        </MenuButton>
        <MenuList zIndex="99">
          {type === 'price' ? (
            <RadioGroup
              onChange={e => {
                setPrice(e);
              }}
              value={hasPrice ? price : 'hide'}
            >
              {data.map((item, key) => {
                return (
                  <MenuItem
                    closeOnSelect={false}
                    key={key}
                    textTransform="capitalize"
                  >
                    <Radio
                      id={item[1] + item[2]}
                      value={item[0]}
                      onChange={e => {
                        selectHandle(item[0], type);
                      }}
                    >
                      {item[0]}
                    </Radio>
                  </MenuItem>
                );
              })}
              <Radio id="hide" value="hide">
                ẩn
              </Radio>
            </RadioGroup>
          ) : (
            <CheckboxGroup>
              {data.map((item, key) => {
                return (
                  <MenuItem
                    closeOnSelect={false}
                    key={key}
                    textTransform="capitalize"
                  >
                    <Checkbox
                      id={item.toLowerCase()}
                      value={item}
                      size="md"
                      colorScheme="green"
                      w="full"
                      cursor="pointer"
                      onChange={e => {
                        e.target.checked
                          ? selectHandle(item, type)
                          : unselectHandle(item, type);
                      }}
                    >
                      {item}
                    </Checkbox>
                  </MenuItem>
                );
              })}
            </CheckboxGroup>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default Option;
