/**
 * Created by enpfeff on 8/7/17.
 */

exports.LOG_LEVEL ='info';
exports.LOG_TO_FILE = true;
exports.LOG_FILE = './all.log';
exports.MONGO_POOL_SIZE = 10;
exports.PAPERTRAIL_PORT = process.env.PAPERTRAIL_PORT;
exports.PAPERTRAIL_URL = process.env.PAPERTRAIL_URL;
exports.MONGO_URL = process.env.MONGO_URL;
exports.PORT = process.env.PORT || 3000;