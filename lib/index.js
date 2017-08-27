/**
 * AppErrors file.
 *
 * @license Apache-2.0
 * @author Shiryaev Andrey <grabzila@gmail.com>
 * @copyright Shiryaev Andrey <grabzila@gmail.com> 2017
 */

"use strict";

/**
 * @module AppErrors
 * @namespace
 * @type {{BaseError: BaseError, HttpError: HttpError, DbError: DbError, DummyError: DummyError}}
 */
const AppErrors = {
    BaseError: require('./BaseError'),
    DbError: require('./DbError'),
    DummyError: require('./DummyError'),
};

const HttpError = require('./httpErrors/HttpError');
HttpError.BadRequest = require('./httpErrors/BadRequest');
HttpError.Unauthorized = require('./httpErrors/Unauthorized');
HttpError.Forbidden = require('./httpErrors/Forbidden');
HttpError.NotFound = require('./httpErrors/NotFound');
HttpError.ServerError = require('./httpErrors/ServerError');
HttpError.ValidationFailed = require('./httpErrors/ValidationFailed');
HttpError.AppExecutionError = require('./httpErrors/AppExecutionError');

AppErrors.HttpError = HttpError;

module.exports = AppErrors;
