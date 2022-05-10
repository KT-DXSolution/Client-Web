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
  const { key, name, price, discountPrice, progression, imageUrl, expiredAt} = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
  <Tr key={key}>
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
        {/* <AvatarGroup size="sm">
          {members.map((member) => {
            return (
              <Avatar
                name="Ryan Florence"
                key={member}
                src={member}
                _hover={{ zIndex: "3", cursor: "pointer" }}
              />
            );
          })}
        </AvatarGroup> */}
      </Td>
      <Td>
      <Text fontSize="md" color='lightgray' pb=".5rem">
          {price}
        </Text>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {' -> '+ discountPrice}
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
      <Td>
        {expiredAt}
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
