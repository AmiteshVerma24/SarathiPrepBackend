import { pool } from "../db/db.js";

const insertTestCase = async (question_id, input, expected_output, sample) => {
    try {
        const newQuestion = await pool.query(
            "INSERT INTO test_cases (question_id, input, expected_output, sample) VALUES($1, $2, $3, $4) RETURNING *",
            [question_id, input, expected_output, sample]
        );
        return newQuestion.rows[0];
    } catch (error) {
        console.error('Error inserting question:  ', error);
        throw error;
    }
};

const getAllTestCases = async (id) => {
    try {
        const queryText = 'SELECT * FROM test_cases WHERE question_id = $1';
        const testCases = await pool.query(queryText, [id]);
        return testCases.rows;
    } catch (error) {
        console.log("Error fetching questions: ", error);
        throw error;
    }
}

const getExampleTestCases = async (id) => {
    try {
        const queryText = 'SELECT * FROM test_cases WHERE sample = $1 AND question_id = $2';
        const testCases = await pool.query(queryText, [true, id]);
        return testCases.rows;
    } catch (error) {
        console.log("Error fetching questions: ", error);
        throw error;
    }
}

export {insertTestCase, getAllTestCases, getExampleTestCases}