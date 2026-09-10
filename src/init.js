import express from "express";
import cors from "cors";
import morgan from "morgan";


const app = express();
app.use(express.json());
app.use(cors(morgan("combined")));







export default app;

