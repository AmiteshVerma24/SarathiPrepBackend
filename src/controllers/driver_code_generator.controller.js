import { pool } from "../db/db.js";

const insertDriverCode = async (question_id, function_name, input_type, output_type) => {
    console.log("Insert mai hu");
    try {
        const driverCode = await pool.query(
            "INSERT INTO driver_code (question_id, function_name, input_type, output_type) VALUES($1, $2, $3, $4) RETURNING *",
            [question_id, function_name, input_type, output_type]
        );
        return driverCode.rows[0];
    } catch (error) {
        console.error('Error inserting question:  ', error);
        throw error;
    }
};

const getDriverCode = async (id) => {
    try {
        const driver_code = await pool.query("SELECT * FROM driver_code WHERE question_id = $1", [id]);
        return driver_code.rows[0];
    } catch (error) {
        console.log("Error fetching question: ", error);
        throw error;
    }
}

export {insertDriverCode, getDriverCode};