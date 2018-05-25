/**
 * Unauthorized file.
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
class Unauthorized extends HttpError {
    constructor(message, detail) {
        super(message || 'You are not authorized.', 401, detail);
    }
}

module.exports = Unauthorized;
