const express = require("express");
const app = express();
const router = express.Router();
const Users = require("../models/users");
const axios = require('axios');

// On ecoute avec la requête GET, recupere  tout les users
router.route("/users").get((req, res) => {
    res.status(200).json(Users);
});

//On ajoute avec le post un nouvel user
router.route("/users").post((req, res) => {
    const newUser = {
        id: Users.length + 1,
        name: req.body.name,
        age: req.body.age,
        salary: req.body.salary
    };
    Users.push(newUser);
    res.redirect("/users");
});

//On cible un user en particulier
router.route("/user/:id").get((req, res) => {
    const id = parseInt(req.params.id);
    const user = Users.find(user => user.id === id);
    res.status(200).json(user);
});

// On delete un user en particulier
router.route("/users/:id").delete((req, res) => {
    const id = parseInt(req.params.id);
    let userIndex = Users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    let deletedUser = Users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted", deletedUser });
});

// router.route('/').get((req, res) => {
//     res.render("index")
// });

// router.route('/displayUsers').get((req, res) => {
//     res.render("displayUsers", { axios })
// });

// router.route('/userDetail/:id').get((req, res) => {
//     res.render("userDetail", { axios })
// });

// router.route('/login').get((req, res) => {
//     res.render("login")
// });

// router.route('/signUp').get((req, res) => {
//     res.render("signUp")
// });

//On exporte le tout au router
module.exports = router;