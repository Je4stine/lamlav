const express = require("express")
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const hbs = require('nodemailer-express-handlebars')

const port = 8080

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static('./public/layouts'));

app.set('view engine', hbs);


app.post("/v1/response", (req, res)=>{
    const {email, } = req.body
})

 

app.get("/",(req, res) =>{
    res.json({ message: "App running" });
})




app.listen(port || 8081, ()=>{
    console.log(`App running at port ${port || 8081}`)
})