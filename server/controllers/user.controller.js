const User = require("../models/user.model");
const router = require("express").Router();

router.route("/register").post((req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error! " + err));
});

router.route("/").get((req, res) => {
  User.find()
    .then((allUsers) => res.json(allUsers))
    .catch((err) => res.status(400).json("Error! " + err));
});

router.route("/").post((req, res) => {
  let email = req.params.email;
  let password = req.params.password;
  res.send(`Email: ${email} Password: ${password}`);
});

router.route("/delete/:id").delete((req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((success) => res.json("Success! User deleted."))
    .catch((err) => res.status(400).json("Error! " + err));
});

module.exports = router;
