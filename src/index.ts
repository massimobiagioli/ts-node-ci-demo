import express from 'express';

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: 'Hello CI' });
});

app.listen(4000, () => console.log("Server started on port 4000"));