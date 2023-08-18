const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const router = require('./routes');

app.use('/', router);

app.listen(port, () => console.log(`Server sedang berjalan di http://localhost:${port}`));
