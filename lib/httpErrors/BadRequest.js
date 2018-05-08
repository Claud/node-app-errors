/**
 * BadRequest file.
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
class BadRequest extends HttpError {
    constructor(message, detail) {
        super(message, 400, detail);
    }
}

module.exports = BadRequest;
