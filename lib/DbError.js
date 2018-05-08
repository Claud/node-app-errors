/**
 * DbError file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

'use strict';

const _ = require('lodash');
const BaseError = require('./BaseError');

/**
 * @extends BaseError
 */
class DbError extends BaseError {
    constructor(message, detail) {
        super(message, detail);

        this.setDetail(detail);
        /**
         * @type {string}
         * @private
         */
        this._name = 'DbError';
        /**
         * @type {string}
         * @protected
         */
        this._title = 'Database Error';
    }

    get title() {
        return this._title;
    }

    /*toJSON() {
        return {
            name: this.name,
            title: this.title,
            message: this.message,
            detail: this.detail,
            stack: this.stack,
        };
    }*/
}

module.exports = DbError;
