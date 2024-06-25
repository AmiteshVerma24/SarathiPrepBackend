import { Router } from "express";
import {
    insertDriverCode,
    getDriverCode
} from "../controllers/driver_code_generator.controller.js"
import { getQuestionName } from "../controllers/questions.controller.js";
import generateDriverCode from "../middlewares/generateDriverCode.js";

const router = Router();

// Add driver code
router.route("/addDriverCode").post(async(req, res) => {
    try {
        console.log(req.body);
        const {question_id, function_name, input_type, output_type} = req.body;
        const newDriverCode = await insertDriverCode(question_id, function_name, input_type, output_type);
        res.json(newDriverCode);
    } catch (error) {
        console.log(error)
    }
});
// Get question by ID
router.route("/getDriverCode/:id").get(async(req, res) => {
    try {
        const { id } = req.params;
        const driverCode = await getDriverCode(id);
        const questionName = await getQuestionName(id);
        const code = generateDriverCode(questionName.title, driverCode.function_name, driverCode.input_type, driverCode.output_type);
        const json = {code};
        res.json(json);
    } catch (error) {
        console.log(error)
    }
});

export default router;