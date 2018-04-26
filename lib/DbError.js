/**
 * DbError file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

"use strict";

const _ = require('lodash');
const BaseError = require('./BaseError');

/**
 * @extends BaseError
 */
class DbError extends BaseError {
    constructor(message, detail) {
        super(message, detail);
        /**
         * @type {string}
         * @private
         */
        this._name = 'DbError';
    }

    /*toJSON() {
        return {
            name: this.name,
            message: this.message,
            stack: this.stack,
        };
    }*/
}

module.exports = DbError;
