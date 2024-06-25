import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
)
// ROUTES
import questionRouter from "./routes/questions.routes.js";
import driverCodeRouter from "./routes/driver_code_generator.routes.js";
import testCaseRouter from "./routes/test_cases.routes.js";
// DEFINE THE ROUTES

app.use("/question", questionRouter);
app.use("/driverCode", driverCodeRouter);
app.use("/testcase", testCaseRouter);
app.get("/test", async (req, res) => {
    res.send("hello");
  });

app.listen(3000, () => {
    console.log("Server started at port 5432")
})