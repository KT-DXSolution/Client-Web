import {
  Avatar,
  AvatarGroup,
  Flex,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdRowing } from "react-icons/md";

function DashboardTableRow(props) {
  const { name, price, discountPrice, progression, imageUrl, expiredAt, purchasers} = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
  <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={imageUrl} w="50px" borderRadius="12px" me="18px" />
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>

      <Td>
        <AvatarGroup size="sm" max={5}>
          {purchasers.map((purchaser) => {
            return (
              <Avatar
                name={purchaser.purchaser.name}
                key={purchaser.id}
                src={purchaser.purchaser.picture}
                _hover={{ zIndex: "3", cursor: "pointer" }}
              />
            );
          })}
        </AvatarGroup>
      </Td>
      <Td>
      <Text fontSize="md" color='lightgray' pb=".5rem">
          {price}
        </Text>
        <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem" paddingLeft='20px'>
          {`→ `+ discountPrice}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme={progression === 100 ? "teal" : "cyan"}
            size="xs"
            value={progression}
            borderRadius="15px"
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "150px" }} >
        {expiredAt}
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
