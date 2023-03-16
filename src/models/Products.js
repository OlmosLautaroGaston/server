import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    category: String,
    content: String,
    domicilio: String,
    telefono: Number,
    facebook: String,
    instragram: String,
    web: String,
    mail: String,
    url: String,
    imgCarrousel: Array,
    repartoadomicilio: String,
    mapa: String,
    ofertas: String,
    diasyhorarios: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Product", productSchema);
