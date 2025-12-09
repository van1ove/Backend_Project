const express = require('express');
const app = express();

const PORT = 1505;

console.log('Server is starting...');
console.log('Almost done...')

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));