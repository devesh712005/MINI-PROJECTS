import express from "express";
import snippetRouter from "./routes/snippet.js";
import cors from "cors";
const app = express();
const PORT = 8000;
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/events", (req, res) => {
  console.log("Received event", req.body.type);
  return res.status(200).json({});
});

app.use("/api/v1/snippet", snippetRouter);

//http://localhost:8000/api/v1/snippet

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
