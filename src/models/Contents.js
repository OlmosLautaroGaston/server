import { Schema, model } from "mongoose";

const contentSchema = new Schema(
  {
    company: String,
    position: String,
    duration: String,
    responsabilities: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Content", contentSchema);
