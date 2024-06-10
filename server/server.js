const express = require("express")
const App = express()
const Port = process.env.Port | 3000

require('dotenv').config()

const cors = require("cors")
const mongoose = require("mongoose")


const routes = require("./routes/taskRouter")

App.use(cors());
App.use(express.json());


// App.get('/', (req, res) => {
//     res.send("Hello Client");
// })

// console.log(process.env)

mongoose
    .connect(process.env.MONGO_URL)
    .then(
        () => console.log("Mongoose Connected..."))
    .catch((err) => console.log(err))


App.use("/api", routes)


App.listen(Port, () => {
    console.log(`Listening on ${Port}`)
})