import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import posts_routes from "./posts/posts_routes";

const { PORT, MONGODB_URI } = process.env;

const port = PORT;
const app = express();

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use("/posts", posts_routes);

app.listen(port, () => console.log(`Running on port ${port}`));
