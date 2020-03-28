const crypto = require('crypto'); // criar ID e gerar criptografia

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}