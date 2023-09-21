import express from "express";
const app = express();
import multer from "multer";

//global middleware -----------------------------------------

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(multer().any());

export default app;