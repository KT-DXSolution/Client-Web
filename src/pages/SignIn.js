import React,{useState, useRef} from "react";
import NewWindow from 'react-new-window'
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import * as config from 'config.js'
import { useSelector, useDispatch  } from "react-redux";
import { login } from '../store/modules/auth'

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const kakaoUrl = `${config.BASE_URL}/oauth/oauth2/authorization/kakao`
  const [open,setOpen] = useState(false);
  let kakaoRef = useRef();
  const dispatch = useDispatch();

  const ceoLogin = function(){
    let ceoSeq = document.getElementById('ceoId').value;
    localStorage.setItem('ceoSeq', ceoSeq);
    window.location.reload();
  }

  const kakaoLogin = function(){
    setOpen(true)
  }

  const winClose = ()=>{
    setOpen(false);

    // Kakao Token
    const apiToken = localStorage.getItem('apiToken');
    if(apiToken){
      dispatch(login(apiToken));
      window.location.reload();
    }
  }

  return (
    <>
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome Back
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              사장님 포탈에 오신것을 환영합니다. 로그인 해주세요.
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                ID
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='아이디를 입력해주세요.'
                size='lg'
                id="ceoId"
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='패스워드를 입력해주세요.'
                size='lg'
              />
              <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize='15px'
                type='submit'
                bg='teal.300'
                w='100%'
                h='45'
                color='white'
                mt='20px'
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
                onClick={ceoLogin}
                >
                SIGN IN
              </Button>
              <Button
                fontSize='15px'
                type='submit'
                bg='yellow.300'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "yellow.200",
                }}
                _active={{
                  bg: "yellow.400",
                }}
                onClick={kakaoLogin}
                >
                KAKAO LOGIN
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
    </Flex>
  {open&&<NewWindow onUnload={winClose} id="kakaoWindow" ref={kakaoRef} 
  onOpen={(newWindow) => {newWindow.location.href=kakaoUrl; newWindow.addEventListener('DOMContentLoaded',console.log(newWindow.location.href))}}>
    
  </NewWindow>}
  </>
  );
}

export default SignIn;
