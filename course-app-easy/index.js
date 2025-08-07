// in this backend we are not using database we use global arrays

import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
import cors from 'cors';
const port = 3000;
app.use(cors());
app.use(express.json());
const secretkey = 'secret24';


const ADMINS = [];
const USERS = [];
const COURSE = [];

app.get('/', (req, res) => {
    return res.json({
        msg: "api is working"
    });
});

app.post('/admin/signup', (req, res) => {
    const admin = req.body;

    const existingAdmin = ADMINS.find((a) => {
    return a.username === admin.username;
     });

    if(existingAdmin) {
        return res.status(400).json({
            message: "Admin already exists"
        })
    } else {
        ADMINS.push(admin);
        console.log(ADMINS);
        const token = jwt.sign(admin, secretkey, { expiresIn: '1h'});
        return res.status(200).json({
            message: "Admin created successfully",
            token: token
        })
    }

});

app.post('/admin/login', (req, res) => {
    const { username, password } = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password);

    if(admin) {
        const token = jwt.sign({username, password}, secretkey, {expiresIn: '1h'});
        res.json({
            message: "Logged in successfully",
            token: token
        })
    } else {
        res.json({
            message: "Authentication failed"
        })
    }
});


app.listen(port, () => {
    console.log(`server is started on port ${port}`)
});