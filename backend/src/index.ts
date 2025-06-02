import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/upload", (req, res) => {
  const { link } = req.body;
  console.log("Received link:", link);
  res.json({ message: "Link received successfully", link });
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
