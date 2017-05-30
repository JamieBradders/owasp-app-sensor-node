class AppSensor {
  constructor(options) {
    this.config = options ? options : require('./config/sensor.config.js')
    this.codes = require('./config/sensor.codes.json')
  }

  /**
   * log()
   * @param {string} code
   * @param {string} [message]
   * Submits a log the chosen external logging system.
   * Logs the message to the terminal window [might be removed].
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
    // console.log('this is payload', payload)

    return payload
  }
}

module.exports = AppSensor
