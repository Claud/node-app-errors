/**
 * DummyError file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

'use strict';

const BaseError = require('./BaseError');

/**
 * Dummy error that can be used for throw fake error.
 * Example: This error can be not logging.
 *
 * @extends BaseError
 */
class DummyError extends BaseError {
    constructor(message, ...args) {
        super(message, ...args);

        /**
         * @type {string}
         * @private
         */
        this._name = 'DummyError';
    }
}

module.exports = DummyError;
