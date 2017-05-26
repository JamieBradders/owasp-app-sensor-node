module.exports = (options) => {
  const config = options ? options : require('./module.config.js')

  // Maybe we should iterate through the files here
  // in a _bootstrap.js perhaps?
  return (req, res, next) => require('./something.js')(req, res, next, config)
}