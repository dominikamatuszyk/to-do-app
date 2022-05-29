const Task = require("../models/task.model");
const router = require("express").Router();
const passport = require("passport");

 
router
  .route("/")
  .post(passport.authenticate("jwt", { session: false }), (req, res) => {
    const { user } = req;
    const newTask = new Task(req.body);
    newTask.userId = user._id;
    newTask
      .save()
      .then((task) => res.json(task))
      .catch((err) => res.status(400).json("Error! " + err));
  });

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), (req, res) => {
    const { user } = req;
    Task.find({ userId: user._id })
      .then((tasks) => res.json(tasks))
      .catch((err) => res.status(400).json("Error! " + err));
  });

router.route("/update/:id").put((req, res) => {
  console.log(req.body.isDone);
  Task.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { isDone: req.body.isDone } }
  ).then((res) => res.data);
});

router.route("/delete/:id").delete((req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then((success) => res.json("Success! Task deleted."))
    .catch((err) => res.status(400).json("Error! " + err));
});

module.exports = router;
