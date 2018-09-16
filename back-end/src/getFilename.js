'use strict';

const format = require('tiny-date-format');

/**
 * Obtém o nome do arquivo.
 * @param {Date} [date]
 * @returns {String}
 */
const getFilename = (
  date = new Date(),
) => 'Arquivo - ' + format(date, 'DD-MM-YYYY') + '.csv';

module.exports = getFilename;
