'use strict'

let path = require('path');

function dropExts(filename) {
    let ext;
    while (ext = path.extname(filename)) {
        filename = filename.slice(0, -ext.length);
    }
    return filename;
}

module.exports = dropExts