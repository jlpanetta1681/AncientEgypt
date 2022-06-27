const express = require('express');

const router = express.Router();


router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /gods'

});
});
router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /gods'

});
});

module.exports = router