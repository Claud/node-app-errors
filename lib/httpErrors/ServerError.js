/**
 * ServerError file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

'use strict';

const HttpError = require('./HttpError');

/**
 * @extends HttpError
 */
class ServerError extends HttpError {
    constructor(message, detail) {
        super(message || 'Critical error of server.', 500, detail);
    }
}

module.exports = ServerError;
