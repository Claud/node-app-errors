/**
 * AppExecutionError file.
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
class AppExecutionError extends HttpError {
    constructor(message, detail) {
        super(message, 540, detail);

        /**
         * @type {string}
         * @protected
         */
        this._title = 'App Execution Error';
    }
}

module.exports = AppExecutionError;
