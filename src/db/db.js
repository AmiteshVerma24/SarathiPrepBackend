import pkg from "pg"
const {Pool} = pkg;
const pool = new Pool({
  user: "amiteshverma",
  password: "amitesh24",
  host: "localhost",
  port: 5432,
  database: "code"
});

export { pool };
