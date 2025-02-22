import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProducts: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { sucess: false, message: "Please fill all the inputs" };
    }
    const res = await fetch("/api/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product added" };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProducts: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if(!data.success){
        return({success:false, message:data.message})
    }
    set(state => ({products: state.products.filter(product => product._id !== pid)}))
    return {success:true, message:data.message}
  },
  updatingProduct: async(pid, updatePrduct) =>{
    const res = await fetch (`/api/products/${pid}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePrduct),
    });
    const data = await res.json();
    if (!data.success){
      return ({succes:false, message:data.message});
    }
      set((state) =>({
        products: state.products.map(product=>product._id === pid ? data.data: product)
      }))
    }
}));
