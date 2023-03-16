import { config } from "dotenv";
config();

//const URI = process.env.MONGODB_URI; //acceso al SO a través de process, acceso a URI en archivo .env
export default {
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost/guia-comercial-test",
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET,
};
