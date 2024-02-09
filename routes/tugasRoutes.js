const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.sendFile('tugas.html', { root: './views' });
});

module.exports = router;