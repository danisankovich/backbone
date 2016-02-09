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
