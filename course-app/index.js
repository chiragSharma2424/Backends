import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.json({
        msg: "api is working"
    })
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
});