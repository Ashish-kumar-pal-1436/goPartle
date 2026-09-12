import { Router } from "express";

import {
  createRequirement,
} from "../controllers/requirement.controller.js";

const router = Router();

router.post("/", createRequirement);

export default router;