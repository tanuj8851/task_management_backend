import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import taskRoutes from "./routes/task.route.js";

//config dotenv
dotenv.config();

//rest object
const app = express();
const PORT = process.env.port || 8000;

//middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));

//routes
app.use("/api/task", taskRoutes);

app.get("/", (req, res) => {
  res.send(`<h1>Task Management System Backend</h1>`);
});

// server listen

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
