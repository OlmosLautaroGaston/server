import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    company: String,
    position: String,
    duration: String,
    responsabilities: Object
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Product", productSchema);
