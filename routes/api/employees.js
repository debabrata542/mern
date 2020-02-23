const express = require('express');
const app = express();
const Employees = require('../../models/Employees');



app.get('/', (req, res) => {
    Employees.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' + err));
});
app.get('/editEmployee/:id', (req, res) => {
    Employees.findById(req.params.id)
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' + err));
});
app.post('/addEmployee', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;


    const newEmployees = new Employees({
        firstName,
        lastName,
        email,
        phone,

    });

    newEmployees.save()
        .then(() => res.json('Employees added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/deleteEmployee/:id', (req, res) => {
    Employees.deleteOne({ _id: req.params.id })
        .then(() => res.json('Employees deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
    // Page.findByIdAndDelete(req.params.id)
    //     .then(() => res.json('Page deleted'))
    //     .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/updateEmployee/:id', (req, res) => {
    Employees.findById(req.params.id)
        .then(employees => {
            employees.firstName = req.body.firstName;
            employees.lastName = req.body.lastName;
            employees.email = req.body.email;
            employees.phone = req.body.phone;


            employees.save()
                .then(() => res.json('Employees updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = app;