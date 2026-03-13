const express = require('../node_modules/express');
const router = express.Router();

router.get('/:nr', (req, res) => {

    if(req.params.nr == 0)
        return res.send('nie ma takiego artykułu');
    
    res.send('artykuł o nr: '+req.params.nr);
});

module.exports = router;