/**
 * @typedef {Object} CoinmarketcapData
 * @property {PointsContainer} data
 * @property {Status} status
 */

/**
 * @typedef {Object} PointsContainer
 * @property {Points} points
 */

/**
 * @typedef {Object.<string, DataPoint>} Points
 */

/**
 * @typedef {Object} DataPoint
 * @property {number} value
 * @property {string} unit
 */

/**
 * @typedef {Object} Status
 * @property {string} timestamp
 * @property {string} error_code
 * @property {string} error_message
 * @property {string} elapsed
 * @property {number} credit_count
 */

/**
 * @typedef {Object} BitcoinData
 * @property {Number} percent
 * @property {Number} last
 * @property {Number} current
 * @property {String} update
 * @property {Points} [points]
 */
