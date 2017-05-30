/**
 * Test the AppSensor Core Log Method
 */
const AppSensor = require('../../index.js')
const chai = require('chai')
const expect = chai.expect

describe('AppSensor', function () {
  beforeEach(function () {
    this.sensor = new AppSensor()
  })

  it('should return an object', function () {
    expect(this.sensor.log('ACE1')).to.be.an('object')
  })

  it('should error if the detection code does not exist', function () {
    expect(() => this.sensor.log('INV4L1D')).to.throw('Detection Code Not Found')
  })
})
