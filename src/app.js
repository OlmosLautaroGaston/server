import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import 'babel-polyfill';

import { createRoles } from "./libs/initialSetup";

import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routes";

const app = express();
createRoles();

// settings
app.set("port", config.PORT);

// middlewards
app.use(morgan("dev")); //consultas al sv
app.use(cors());
app.use(express.json()); //utilizar strings a travéz de json

// routes
app.use("/api/products", productsRoutes); //usa la ruta de navegación para llamar al archivo js
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);

export default app;
