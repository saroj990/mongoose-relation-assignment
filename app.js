require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//defining Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const todos = require("./routes/todos");
const {
    urlencoded
} = require("express");


/*mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    console.log('connected to DB')
})*/

mongoose.connect("mongodb://localhost/todo1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNETED");
});

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser());
app.use(cors());

//calling routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/todos", todos)

app.use(function (req, res, next) {
    console.log(`METHOD:${req.method}, URI=${req.url}`)
});
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})