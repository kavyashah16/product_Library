import {
  Box,
  Heading,
  HStack,
  Button,
  Image,
  Text,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "../store/products";
import { toaster } from "../components/ui/toaster";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProducts, updatingProduct } = useProductStore();

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProducts(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        isCloseable: true,
        duration: 3000,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        isCloseable: true,
      });
    }
  };

  const [updateProduct, setUpdateProduct] = useState({ ...product });

  const handleUpdateProduct = async () => {
    const { success, message } = await updatingProduct(product._id, updateProduct);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        isCloseable: true,
        duration: 3000,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        isCloseable: true,
      });
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button color="white" bg="#0086ad" _hover={{ bg: "#005582" }}>
                <FaRegEdit />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Product</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <VStack spacing={3} align="stretch">
                  <Input
                    value={updateProduct.name}
                    name="name"
                    onChange={(e) =>
                      setUpdateProduct((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Product Name"
                  />
                  <Input
                    value={updateProduct.price}
                    name="price"
                    onChange={(e) =>
                      setUpdateProduct((prev) => ({ ...prev, price: e.target.value }))
                    }
                    placeholder="Price"
                    type="number"
                  />
                  <Input
                    value={updateProduct.image}
                    name="image"
                    onChange={(e) =>
                      setUpdateProduct((prev) => ({ ...prev, image: e.target.value }))
                    }
                    placeholder="Image URL"
                  />
                </VStack>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button onClick={handleUpdateProduct}>Save Changes</Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
          <Button
            color="white"
            bg="#ff0000"
            _hover={{ bg: "#bf0000" }}
            onClick={() => handleDelete(product._id)}
          >
            <MdDelete />
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
