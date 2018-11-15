import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import WebSocket from "ws";

import posts_routes from "./posts/posts_routes";

const { PORT, MONGODB_URI } = process.env;

const port = PORT;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  ws.on("message", message => {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });
});

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

server.listen(port, () => console.log(`Running on port ${port}`));
