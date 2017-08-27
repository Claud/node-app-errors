/**
 * ValidationFailed file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

"use strict";

const HttpError = require('./HttpError');

/**
 * @extends HttpError
 */
class ValidationFailed extends HttpError {
    constructor(message, detail) {
        super(message || 'Data Validation Failed', detail, 422);
    }
}

module.exports = ValidationFailed;
