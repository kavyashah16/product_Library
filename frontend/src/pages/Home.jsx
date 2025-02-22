import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/products";
import ProductCard from "../components/ProductCard"; // Ensure this is correctly imported

const Home = () => {
  const { products, fetchProducts } = useProductStore(); // Get products from the store

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Current Products
        </Heading>

        {products.length > 0 ? (
          <Box>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}  gap={8}>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </Grid>
          </Box>
        ) : (
          <Text
            fontSize="xl"
            textAlign="center"
            fontWeight="bold"
            color="gray.500"
          >
            No products found{" "}
            <Link to="/create">
              <Text
                as="span"
                color={useColorModeValue("blue.500", "#ff1e00")}
                _hover={{ textDecoration: "underline" }}
              >
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Home;
