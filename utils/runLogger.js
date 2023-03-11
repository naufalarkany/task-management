const morgan = require('morgan');
const morganLogger = require('morgan');
const fs = require('fs');

async function runLogger(app) {
    const requestId = function requestId(req, res, next) {
        req.logId = Date.now();
        next();
    };

    app.use(requestId);
    morgan.token('id', (req) => JSON.stringify(req.logId));
    morgan.token('params', (req) => JSON.stringify(req.params));
    morgan.token('query', (req) => JSON.stringify(req.query));
    morgan.token('body', (req) => JSON.stringify(req.body));
    app.use(
        morgan(
            '[:date[clf]] :id ":status :method :url :res[content-length] ":user-agent" :params :query :body'
        )
    );

    let logpath = './logger/access.log';

    app.use(
        morganLogger(
            '[:date[clf]] :id | :status :response-time ms | ":method :url :res[content-length] ":user-agent" :params :query :body',
            {
                stream: fs.createWriteStream(logpath, { flags: 'a' }),
            }
        )
    );
}

module.exports = runLogger;
