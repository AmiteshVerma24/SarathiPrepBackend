import { Router } from "express";
import {
    getQuestion,
    getQuestionName,
    getQuestions,
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
// Get question by ID
router.route("/getQuestion/:id").get(async(req, res) => {
    try {
        console.log(req.body);
        const { id } = req.params;
        const newQuestion = await getQuestion(id);
        res.json(newQuestion);
    } catch (error) {
        console.log(error)
    }
});
// Get question name
router.route("/getQuestionName/:id").get(async(req, res) => {
    try {
        console.log(req.body);
        const { id } = req.params;
        const questionName = await getQuestionName(id);
        res.json(questionName);
    } catch (error) {
        console.log(error)
    }
});
// Get all questions
router.route("/getQuestions").get(async(req, res) => {
    try {
        const questions = await getQuestions();
        res.json(questions);
    } catch (error) {
        console.log(error)
    }
});

export default router;