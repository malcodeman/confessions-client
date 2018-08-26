import express from "express";

import { create, findAll } from "./posts_controller";

const router = express.Router();

router.post("/", create);
router.get("/", findAll);

export default router;
