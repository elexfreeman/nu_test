const express = require('express');
const router = express.Router();

router.get('/client/list', async (req, res, next) => {
    res.json({ data: 22 })
});


router.get('/client/:id', async (req, res, next) => {
    res.json({ data: req.params.id })
});

export { router };