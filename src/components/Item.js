import {
    Tr,
    Td,
    Avatar,
    useColorModeValue,
    Flex,
    Text,
} from "@chakra-ui/react";
import React, {useState } from "react";
const Item = (props)=>{
    const { data, onClick} = props;
    const [ isChecked, setChecked  ] = useState(false);
    const bgIcons = useColorModeValue("gray.100", "rgba(255, 255, 255, 0.5)");
    const textColor = useColorModeValue("gray.700", "white");
    return (
             <Tr cursor='pointer'
                transition='all .25s ease'
                _hover={{ bg: bgIcons }}
                borderRadius='15px'
                onClick={()=>{
                  onClick(data.id)
                  setChecked(!isChecked);
                }}
                backgroundColor={isChecked?bgIcons:''}
                >
                  <Td minWidth={{ sm: "200px" }} pr="0px">
                    <Flex align="center" py=".8rem" flexWrap="nowrap">
                      <Avatar src={data.imageUrl} w="50px" borderRadius="12px" me="18px" />
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                      >
                        {data.name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td pr="10px">
                    <Text fontSize="md" mr="1rem" color={textColor} fontWeight="bold" >
                      {data.price}
                    </Text>
                  </Td>
                </Tr>
    )
}

export default Item;