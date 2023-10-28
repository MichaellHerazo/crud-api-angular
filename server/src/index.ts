import Server from "./models/server";
import dotenv from 'dotenv';

// Configuramos las variables del ambiente
dotenv.config();

const server = new Server();