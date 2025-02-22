import express from "express";
import {
  createProducts,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/create", createProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
