const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const config = require('config');
// const jwt = require('jsonwebtoken');


// User Model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
// @access  Public
// router.get('/', (req, res) => {
//   User.find()
//     .sort({ date: -1 })
//     .then(users => res.json(users));
// });


// router.post('/add', (req, res) => {
//   console.log(req.body)
//   const username = req.body.username;
//   const password = req.body.password;

//   const newUser = new User({
//     username,
//     password,
//   });

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

app.post('/auth', (req, res) => {
  if (req.body.data.username && req.body.data.password) {
    console.log(req.body, "bod of the box")
    User.findOne({ username: req.body.data.username }, (err, user) => {
      console.log(user)
      if (err) {
        return res.json({ err: true, msg: "Internal Server Error" })
      }
      if (!user) {
        return res.json({ err: true, msg: "Invalid Username" })
      }
      if (req.body.data.password != user.password) {
        return res.json({ "err": true, msg: "Password Not Found" })
      }
      return res.json({ err: false, msg: "success", user: user.username })
    })

  }
})
















// router.route('/').get((req, res) => {
//   Exercise.find()
//       .then(exercises => res.json(exercises))
//       .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/:id').get((req, res) => {
//   Exercise.findById(req.params.id)
//       .then(exercise => res.json(exercise))
//       .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);

//   const newExercise = new Exercise({
//       username,
//       description,
//       duration,
//   });

//   newExercise.save()
//       .then(() => res.json('Exercise added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Exercise deleted'))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//       .then(exercise => {
//           exercise.username = req.body.username;
//           exercise.description = req.body.description;
//           exercise.duration = Number(req.body.duration);

//           exercise.save()
//               .then(() => res.json('Exercise updated'))
//               .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));


//   // Exercise.update(
//   //     { _id: req.params.id },
//   //     { $set: req.body }
//   // ).then(() => res.json('Exercise updated!')).catch(err => res.status(400).json('Error: ' + err));


// });

module.exports = app;
