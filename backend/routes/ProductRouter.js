const ensureAuthenticated = require('../middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Laptop",
            price: 50000
        },
        {
            name: "Tablet",
            price: 20000
        },
        {
            name: "Mobile",
            price: 15000
        }
    ])
});

module.exports = router;