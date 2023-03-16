import Product from "../models/Products";

export const createProduct = async (req, res) => {
  const {
    title,
    category,
    content,
    domicilio,
    repartoadomicilio,
    telefono,
    mapa,
    facebook,
    instragram,
    web,
    ofertas,
    diasyhorarios,
    mail,
    url,
    imgCarousel,
  } = req.body; //destructuring - obteniendo datos del body
  const newProduct = new Product({
    title,
    category,
    content,
    domicilio,
    repartoadomicilio,
    telefono,
    mapa,
    facebook,
    instragram,
    web,
    ofertas,
    diasyhorarios,
    mail,
    url,
    imgCarousel,
  }); //asign schema
  const productSaved = await newProduct.save(); //post into db
  res.status(201).json(productSaved); //codigo de estado objeto creado
};
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};
export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProduct);
};
export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(204).json();
};
