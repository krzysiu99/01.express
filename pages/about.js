const express = require('../node_modules/express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('podstrona about...');
});

module.exports = router;