import express from "express";
const app = express();
app.use(express.json());


// ROUTES

import questionRouter from "./routes/questions.routes.js";
app.use("/question", questionRouter);

app.listen(3000, () => {
    console.log("Server started at port 5432")
})