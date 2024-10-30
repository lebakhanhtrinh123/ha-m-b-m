const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

// API để chuyển đổi chuỗi thành hàm băm
app.post("/hash", (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "No text provided" });
    }

    // Chuyển đổi thành hàm băm SHA-256
    const hash = crypto.createHash("sha256").update(text).digest("hex");
    res.json({ hash });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
