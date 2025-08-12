import express from "express";
import exampleRoute from "./routes/exampleRoute";

const app = express();
app.use(express.json());

app.use("/example", exampleRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
