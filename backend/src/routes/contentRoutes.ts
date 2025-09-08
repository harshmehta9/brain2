import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { createContent, deleteContent, updateContent } from "../controllers/contentController";

const router = Router();

router.post("/createContent", authMiddleware, createContent);
router.post("/updateContent", authMiddleware, updateContent);
router.post("/deleteContent", authMiddleware,deleteContent);


export default router;