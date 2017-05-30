class AppSensor {
  constructor(options) {
    this.config = options ? options : require('./module.config.js')
  }

  log() {
    console.log('something is happening', this.config)
  }
}

module.exports = AppSensor