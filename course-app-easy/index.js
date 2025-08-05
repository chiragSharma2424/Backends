import express from 'express';
const app = express();
import cors from 'cors';
const port = 3000;

let ADMINS = [];
let USERS = [];
let COURSE = [];

app.get('/', (req, res) => {
    return res.json({
        msg: "api is working"
    })
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`)
});