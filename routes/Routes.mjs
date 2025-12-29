import express from "express";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { homeGet, homePost, registerGet, registerPost } from "../controllers/Controllers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router()

router.get("/home",homeGet)
router.post("/home",homePost)
router.get("/register",registerGet)
router.post("/register",registerPost)

export default router