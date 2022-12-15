const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', (req, res) => {
    throw new Error('fatal');
})

//initRoutes(app);
app.use(errorHandler);

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function errorHandler(
    err,
    req,
    res,
    next
) {
    if (res.headersSent) {
        return next(err);
    }
    console.warn('error', '', {
        message: 'Error Handler',
        action: `${req.method} : ${req.url}`,
        body: {
            ...req.body,
            secretKey: undefined,
            publicKey: undefined,
        },
        err,
    });

    res.status(500).send(err.message);
};