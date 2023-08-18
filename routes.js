const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile('./index.html', {root: 'views'})
});

router.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: 'views'})
});

router.get('/product', (req, res) => {
    res.sendFile('./product.html', {root: 'views'})
});

router.get('/product/:name', (req, res) => {
    const { name } = req.params;
    res.json({
        status: 'Succesfully',
        message: `Produk ${name}`,
    })
});

module.exports = router;
