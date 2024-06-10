const taskModel = require("../models/taskModel")


module.exports.getTasks = async (req, res) => {
    const task = await taskModel.find();
    res.send(task);
    // res.send("hii");
}

module.exports.saveTask = (req, res) => {
    const { task } = req.body;

    taskModel.create({ task })
        .then((data) => {
            // console.log("saved sucessfully");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something Went wrong" });
        })
}


module.exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    taskModel.findByIdAndUpdate(id, { task })
        .then(() => {
            res.send("updated sucessfully")
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something Went wrong" });
        })
}


module.exports.deleteTask = (req, res) => {
    const { id } = req.params;

    taskModel.findByIdAndDelete(id)
        .then(() => {
            res.send("deleted sucessfully")
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something Went wrong" });
        })
}
