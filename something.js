module.exports = (req, res, next, config) => {
  console.log('Here is the config', config)

  // Detect params and return an error if true
  if (Object.keys(req.query).length > 0) {
    // Send a 500 and send and Error Message
    res.status(500).send('Error')

    // Break out of the method
    return
  }

  // Otherwise carry on...
  next()
}