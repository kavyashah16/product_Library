import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa6";
import React from "react";
import { useColorMode } from "./ui/color-mode";
import { LuSun } from "react-icons/lu";
import { useColorModeValue } from "../components/ui/color-mode";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="1140px" px={4} mx="auto">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
        gap={4}
      >
        <Text
          as={Link}
          to="/"
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          color={useColorModeValue("#2a2623", "#ff1e00")}
        >
          Product Store
        </Text>

        <HStack spacing={2} alignItems="center">
          <Button as={Link} to="/create" bg={useColorModeValue("teal.500", "#ff1e00")} color="white" >
            <BsPlusSquare size={20} />
          </Button>
          <Button onClick={toggleColorMode} bg={useColorModeValue("teal.500", "#ff1e00")} color="white">
            {colorMode === "light" ? <FaRegMoon /> : <LuSun />}
          </Button>
          
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;