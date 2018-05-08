/**
 * HttpError file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

'use strict';

const httpStatusCodes = require('http').STATUS_CODES;

const _ = require('lodash');
const BaseError = require('../BaseError');

/**
 * Universal HttpError.
 * It can be used for create http errors with http code that is not defined in httpErrors namespaces,
 *
 * @extends BaseError
 */
class HttpError extends BaseError {
    constructor(message, httpStatusCode, detail, ...args) {
        super(message, httpStatusCode, detail, ...args);

        this.setDetail(detail);
        /**
         * @type {string}
         * @protected
         */
        this._httpStatusCode = httpStatusCode;
        /**
         * @type {string}
         * @protected
         */
        this._name = 'HttpError';
        /**
         * @type {string}
         * @protected
         */
        this._title = httpStatusCodes[httpStatusCode] || 'Non Standard Http Error';
    }

    get httpStatusCode() {
        return this._httpStatusCode;
    }

    get title() {
        return this._title;
    }

    /*toJSON() {
        return {
            name: this.name,
            title: this.title,
            httpStatusCode: this.httpStatusCode,
            detail: this.detail,
            message: this.message,
            stack: this.stack,
        };
    }*/
}

module.exports = HttpError;
