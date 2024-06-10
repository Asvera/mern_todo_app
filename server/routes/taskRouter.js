const { Router } = require("express")

const { getTasks , saveTask, updateTask , deleteTask } = require("../controllers/taslControllers")
 
const router = Router();



// Routes 
router.get("/get", getTasks);
router.post("/save", saveTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;