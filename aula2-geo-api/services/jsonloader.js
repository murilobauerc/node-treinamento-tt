const fs = require('fs');
var path = require('path');

const folder = '../resources'

const jsonloader = (file) => {
    return require(path.join(folder, file))
}

module.exports = jsonloader