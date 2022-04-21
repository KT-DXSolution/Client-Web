
import React from 'react';
import styled from 'styled-components';
import { 
  Flex, 
  Text, 
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Link,
  Button,
  InputRightAddon,
  InputGroup,
  Box,
  Image
 } from "@chakra-ui/react";
 import milk from "assets/img/food/milk500.png"

const RegisterItem = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const titleColor = useColorModeValue("teal.300", "teal.200");

  return (
    <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
      <Flex
        direction='column'
        w='545px'
        background='transparent'
        borderRadius='15px'
        p='40px'
        mx={{ base: "100px" }}
        bg={bgColor}
        boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>

        <Text
          fontSize='xl'
          color={textColor}
          fontWeight='bold'
          textAlign='center'
          mb='22px'>
          Register Item
        </Text>

        <FormControl>
        <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
            사진
          </FormLabel>
          <Box mb='24px' maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mg="20px">
            
            <Image src={milk}  />
          </Box>
          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
            메뉴명
          </FormLabel>
          <Input
            fontSize='sm'
            ms='4px'
            borderRadius='15px'
            type='text'
            placeholder='메뉴명을 입력해주세요.'
            mb='24px'
            size='lg'
          />
          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
            가격
          </FormLabel>
          <InputGroup size="lg">
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='number'
              placeholder='가격을 입력해주세요.'
              mb='24px'
              size='lg'
            />
            <InputRightAddon fontSize='sm' children="원" />
          </InputGroup>
          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
            만료일
          </FormLabel>
          <Input
            fontSize='sm'
            ms='4px'
            borderRadius='15px'
            type='date'
            placeholder='Your password'
            mb='24px'
            size='lg'
          />
          <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              수량
          </FormLabel>
          <Input
            fontSize='sm'
            ms='4px'
            borderRadius='15px'
            type='number'
            placeholder='수량을 입력해주세요.'
            mb='24px'
            size='lg'
          />
          <Button
            type='submit'
            bg='teal.300'
            fontSize='15px'
            color='white'
            fontWeight='bold'
            w='100%'
            h='45'
            mb='24px'
            _hover={{
              bg: "teal.200",
            }}
            _active={{
              bg: "teal.400",
            }}>
            등록
          </Button>
        </FormControl>
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          maxW='100%'
          mt='0px'>
        </Flex>
      </Flex>
      </Flex>
  )
}

export default RegisterItem;