import { Router } from "express";
import {
    getAllTestCases,
    getExampleTestCases,
    insertTestCase
} from "../controllers/test_cases.controllers.js"

const router = Router();

router.route("/insertTestCase").post(async(req, res) => {
    try {
        console.log(req.body);
        const {question_id, input, expected_output, sample} = req.body;
        const newTestCase = insertTestCase(question_id, input, expected_output, sample);
        res.json(newTestCase);
    } catch (error) {
        console.log(error)
    }
});

// Get all testcases of a question
router.route("/getAllTestCases/:id").get(async(req, res) => {
    try {
        const { id } = req.params;
        const testCases = await getAllTestCases(id);
        res.json(testCases);
    } catch (error) {
        console.log(error)
    }
});

// Get example testcases of a question
router.route("/getExampleTestCases/:id").get(async(req, res) => {
    try {
        const { id } = req.params;
        const exampleTestCases = await getExampleTestCases(id);
        res.json(exampleTestCases);
    } catch (error) {
        console.log(error)
    }
});


export default router;