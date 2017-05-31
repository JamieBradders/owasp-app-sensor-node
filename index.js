class AppSensorLogger {
  constructor(options) {
    this.config = options ? options : require('./config/sensor.config.js')
    this.codes = require('./config/sensor.codes.json')
  }

  /**
   * log()
   * Submits a log the chosen external logging system.
   * @param {string} code
   * @param {string} [message]
   */
  log(code, message) {
    // Ensure the code exists.
    if (typeof this.codes[code] === 'undefined') {
      throw new Error('Detection Code Not Found')
    }

    const payload = this.codes[code]

    if (message) {
      payload.customMessage = message
    }

    // Debugging
    console.log('this is payload', payload)

    // @TODO Post the payload to external logger.

    return payload
  }
}

module.exports = AppSensorLogger
