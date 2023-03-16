import mongoose from "mongoose";
import config from "./config"

//conexión de mongoose a la base de datos con parámetros para la correcta conexión.
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.log(error));
