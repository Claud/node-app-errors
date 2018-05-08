/**
 * Forbidden file.
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
class Forbidden extends HttpError {
    constructor(message, detail) {
        /*let message = this.message;
        if (!message && !_.isEmpty(permissionName)) {
            message = 'requires "%s" access right';
            message = util.format(message, permissionName);
        }*/
        super(message, 403, detail);
    }
}

module.exports = Forbidden;
