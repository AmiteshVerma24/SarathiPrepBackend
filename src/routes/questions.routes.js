import { Router } from "express";
import {
    insertQuestion
} from "../controllers/questions.controller.js"

const router = Router();

router.route("/addQuestion").post(async(req, res) => {
    try {
        console.log(req.body);
        const {title, description, difficulty} = req.body;
        const newQuestion = insertQuestion(title, description, difficulty);
        res.json(newQuestion);
    } catch (error) {
        console.log(error)
    }
});

export default router;