const rp = require('request-promise-native')

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
  log(code, message, callback) {
    // Ensure the code exists.
    if (typeof this.codes[code] === 'undefined') {
      throw new Error('Detection Code Not Found')
    }

    const payload = this.codes[code]

    if (message) {
      payload.customMessage = message
    }

    // Test: Handle optional callback...
    // Start by configuring the options
    const options = {
      method: 'POST',
      uri: 'http://localhost:3000/external-log',
      body: {
        some: 'payload'
      },
      json: true
    }

    // Carry out a request
    // Return a promise so that we can react
    rp(options)
      .then(function (response) {
        if (callback && typeof callback === 'function') {
          callback(response)
        } else {
          console.log('Response from outside of the callback', response)
        }
      })
      .catch(function (error) {
        console.error('There was an error with the Api', error)
      })
  }
}

module.exports = AppSensorLogger
