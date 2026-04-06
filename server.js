import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/ask", async (req, res) => {
    const { prompt } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }]
        })
    });

    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
});

app.listen(PORT);
