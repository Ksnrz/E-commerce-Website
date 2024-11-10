import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
