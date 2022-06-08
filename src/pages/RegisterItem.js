
import React from 'react';
import { 
  Flex, 
  Text, 
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightAddon,
  InputGroup,
  Icon,
  Grid
 } from "@chakra-ui/react";
import { MdAddPhotoAlternate } from "react-icons/md";
import Card from "components/Card/Card.js";

const RegisterItem = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const bgIcons = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.5)");

  return (
    <Flex flexDirection='column' pt={{ md: "10px" }}  style={{alignItems:"center"}}>
      <Grid
          templateColumns={{ sm: "1fr", md: "1fr ", lg: "1fr" }}
          templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
          gap='24px'
          style={{width:"85vw"}}>
      <Card p='36px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <Flex
        direction='column'
        background='transparent'
        borderRadius='15px'
        p='40px'
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
          <Flex
              justify='center'
              align='center'
              w='100%'
              h='300px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ bg: bgIcons }}
              mb='24px'>
            <Icon
              as={MdAddPhotoAlternate}
              w='50px'
              h='50px'
              _hover={{ filter: "brightness(120%)" }}
            >
            </Icon>
          </Flex>
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
      </Card>
      </Grid>
      </Flex>
  )
}

export default RegisterItem;