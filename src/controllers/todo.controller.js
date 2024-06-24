import pool from "../db/db";

const insertTodo = async function (description) {
    const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *",
        [description]
    );
}

export {insertTodo}
