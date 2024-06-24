import { pool } from "../db/db.js";

const insertQuestion = async (title, description, difficulty) => {
    try {
        const newQuestion = await pool.query(
            "INSERT INTO questions (title, description, difficulty) VALUES($1, $2, $3) RETURNING *",
            [title, description, difficulty]
        );
        return newQuestion.rows[0];
    } catch (error) {
        console.error('Error inserting question:  ', error);
        throw error;
    }
};

const getQuestion = async (id) => {
    try {
        const question = await pool.query("SELECT * FROM questions WHERE id = $1", [id]);
        return question.rows;
    } catch (error) {
        console.log("Error fetching question: ", error);
        throw error;
    }
}

const getQuestions = async () => {
    try {
        const queryText = 'SELECT * FROM questions';
        const questions = await pool.query(queryText);
        return questions.rows;
    } catch (error) {
        console.log("Error fetching questions: ", error);
        throw error;
    }
}

export {insertQuestion, getQuestion, getQuestions}

// CREATE TABLE questions (
//     id SERIAL PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     description TEXT NOT NULL,
//     difficulty VARCHAR(50) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
