const express = require('express');

const app = express();

app.get('/', (req, res) => {
    throw new Error('fatal');
});

const port = 3000
const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});