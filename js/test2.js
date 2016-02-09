var Vehicle = Backbone.Model.extend({
  urlRoot: '/api/vehicles',
  validate: function(attrs) {
    if(!attrs.registrationNumber) {
      return "Registration Number is Required"
    }
  },
  start: function() {
    console.log("Vehicle Started")
  }
})
var Car = Vehicle.extend({
  start: function() {
    console.log("Car with Registration Number " + this.attributes.registrationNumber + " has started")
  }
})

var car = new Car({
  registrationNumber: "XLI887",
  color: "Blue"
})

car.unset("registrationNumber")
console.log(car.isValid())
car.set({"registrationNumber":"XLI887"})
console.log(car.isValid())
car.start()


var Vehicles = Backbone.Collection.extend({
  model: Vehicle,
  url: '/api/vehicles'
})

var vehicles = new Vehicles([
  new Car({name: 'car1', registrationNumber: "XLI887", colour: "Blue"}),
  new Car({name: 'car2', registrationNumber: "ZNP123", colour: "Blue"}),
  new Car({name: 'car3', registrationNumber: "XUV456", colour: "Gray"})
])

var blueCars = vehicles.where({colour: "Blue"})
console.log("blue cars", blueCars)
var regThis = vehicles.where({registrationNumber: "XLI887"})
console.log("this specific car", regThis)
vehicles.remove(vehicles.get(regThis[0].cid))
console.log("updated vehicles", vehicles)
vehicles.toJSON()
vehicles.each(function(vehicle) {
  console.log(vehicle)
})
