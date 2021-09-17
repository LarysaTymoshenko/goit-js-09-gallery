const express = require('express');

const add = express();
const listener = add.listen(5000, () => {
    console.log(`${listener.address().port}`);
})


