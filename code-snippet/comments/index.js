import express from "express";
import commentRouter from "./routes/comment.js";
import cors from "cors";
const app = express();
const PORT = 8001;
app.use(express.json()); //For getting JSON data from React or Postman into req.body
app.use(express.urlencoded({ extended: true })); //For getting html form data into req.body

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.post("/events", (req, res) => {
  console.log("Received event", req.body.type);
  return res.status(200).json({});
});

app.use("/api/v1/snippet", commentRouter);

// "http:localhost:8001/api/v1/snippet/:id/comment"

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
