const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlewares/not_found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager");
});

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get("/api/v1/tasks");
// app.post("/api/v1/tasks");
// app.get("/api/v1/tasks/:id");
// app.patch("/api/v1/tasks/:id");
// app.delete("/api/v1/tasks/:id");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
