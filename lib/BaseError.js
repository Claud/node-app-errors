/**
 * BaseError file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

'use strict';

const _ = require('lodash');

/**
 * @extends Error
 */
class BaseError extends Error {
    constructor(message, ...args) {
        super(message, ...args);

        this.message = message || 'An error occurred.';
        /**
         * @type {string}
         * @protected
         */
        this._name = 'BaseError';

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error().stack;
        }
    }

    get name() {
        return this._name;
    }

    /**
     * @param {*} data
     */
    setDetail(data) {
        this.detail = data;
        return this;
    }

    toJSON() {
        return BaseError.errorToJson(this);
    }

    /**
     * @param {Error} error
     * @return {object}
     * @throws TypeError
     */
    static errorToJson(error) {
        if (!(error instanceof Error)) {
            throw new TypeError();
        }
        function recursivePropertyFinder(error) {
            if (error === Object.prototype) {
                return {};
            } else {
                return _.reduce(
                    Object.getOwnPropertyNames(error),
                    function copy(result, value) {
                        if (!_.isFunction(error[value])) {
                            if (_.isObject(error[value])) {
                                result[value] = recursivePropertyFinder(error[value]);
                            } else {
                                let m = value.match(/^_(.*)/);
                                let key = value;
                                if (_.has(m, 1)) {
                                    key = m[1];
                                }
                                result[key] = error[value];
                            }
                        }
                        return result;
                    },
                    recursivePropertyFinder(Object.getPrototypeOf(error))
                );
            }
        }
        return recursivePropertyFinder(error);
    }
}

module.exports = BaseError;
