'use strict';

const { join } = require('path');

/**
 * Obtém o _PATH_ do arquivo.
 * @returns {String}
 */
const getPath = () => join('../data', getFilename());

module.exports = getPath;
