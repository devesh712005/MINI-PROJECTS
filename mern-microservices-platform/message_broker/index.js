import express from "express";
import axios from "axios";
const app = express();

const PORT = 8005;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/events", (req, res) => {
  const events = req.body;
  axios.post("http://localhost:8000/events", events); //snippet services
  axios.post("http://localhost:8001/events", events); //comment service
  axios.post("http://localhost:8002/events", events); //query service

  return res.status(201).json({});
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
