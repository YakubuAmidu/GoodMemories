import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://User123:User123@cluster0.ue0nz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const port = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((error) => console.log(error.message));
