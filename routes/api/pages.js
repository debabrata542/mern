const express = require('express');
const router = express.Router();


// Page Model
const Page = require('../../models/page');

router.get('/', (req, res) => {
    Page.find()
        .then(pages => res.json(pages))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.get('/:id', (req, res) => {
    Page.findById(req.params.id)
        .then(pages => res.json(pages))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.post('/add', (req, res) => {
    const name = req.body.name;
    const url = req.body.url;


    const newPage = new Page({
        name,
        url,

    });

    newPage.save()
        .then(() => res.json('Page added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/:id', (req, res) => {
    Page.deleteOne({ _id: req.params.id })
        .then(() => res.json({ err: false, msg: 'Page deleted' }))
        .catch(err => res.status(400).json('Error: ' + err));
    // Page.findByIdAndDelete(req.params.id)
    //     .then(() => res.json('Page deleted'))
    //     .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id', (req, res) => {
    Page.findById(req.params.id)
        .then(page => {
            page.name = req.body.name;
            page.url = req.body.url;


            page.save()
                .then(() => res.json('Page updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//     // Exercise.update(
//     //     { _id: req.params.id },
//     //     { $set: req.body }
//     // ).then(() => res.json('Exercise updated!')).catch(err => res.status(400).json('Error: ' + err));






module.exports = router;