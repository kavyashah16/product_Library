import { useProductStore } from "../store/products";
import { useColorModeValue } from "../components/ui/color-mode";
import { toaster } from "../components/ui/toaster";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Create = () => {
  const {createProducts} = useProductStore()

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = async () => {
    const {success, message} = await createProducts(newProduct)
    if(!success){
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        isCloseable: true,
        duration: 3000
      })
    }
    else{
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        isCloseable: true
      });
    }
    setNewProduct({
      name: "",
      price: "",
      image: "",
    })
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              border="1px solid"
              borderColor="gray.600"
            />
            <Input
              placeholder="Product Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              border="1px solid"
              borderColor="gray.600"
            />
            <Input
              placeholder="Product Image"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              border="1px solid"
              borderColor="gray.600"
            />

            <Button
              bg={useColorModeValue("teal.500", "#ff1e00")}
              color="white"
              _hover={{ bg: "teal.600" }}
              onClick={handleAddProduct}
              w="full"
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Create;
