# Custome errors for your node app.


    const AppErrors = require('@claud/node-app-errors');
    
    Error.prototype.toJSON = function() {
        return AppErrors.BaseError.errorToJson(this);
    };
    
    throw new AppErrors.HttpError.Forbidden();