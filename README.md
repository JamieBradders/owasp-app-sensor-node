# App Sensor Logger Utility Module

## 🚨 Please Do Not Use This in Production

I've started developing this module as a proof of concept as part of a learning exercise to understand how to publish packages to the NPM repository.

## ⚠️ Detect Activity and Log

This module simply provides a helper method called `log()` which takes a detection code as an argument. The method looks up the supplied code and returns a message. Note that this module doesn't contain the logic required to know when to trigger a log, it simply acts a mechanism to carry out the logging.

Overtime the module will account for all of the [OWASP AppSensor Detection Codes](https://www.owasp.org/index.php/AppSensor_DetectionPoints) but there are currently only two, see below:

```json
{
  "ACE1": {
    "message": "ACE1 Error Message",
    "type": "AccessControlException"
  },
  "ACE2": {
    "message": "ACE2 Error Message",
    "type": "AccessControlException"
  }
}
```

## Useage

As mentioned previously, this module is a proof of concept so this is more than likely going to change drastically overtime.

Simply load the App Sensor Module into your application. We assume that the logic to detect your required triggers are handled within your application (remember this is just a logging utility).

In this example we want to be informed when a query string has been appeneded to the request url.

```javascript
const AppSensorLogger = require('owasp-app-sensor-node-logger')
const sensor = new AppSensorLogger()

module.exports = (req, res, next) => {
  if (Object.keys(req.query).length > 0) {
    res.status(500).send('Error')
    sensor.log('ACE1', 'My custom error message')
    return
  } else {
    next()
  }
}
```

Overtime, you will be able to supply a config file when instantiating the `AppSensorLogger` class. The config will let you supply the external logging service endpoint and the logger will carry out the http request to post the message to the service.