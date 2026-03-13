const express = require('../node_modules/express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('strona główna<br><a href="/about">podstrona</a>');
});

module.exports = router;