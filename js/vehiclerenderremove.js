var Vehicle = Backbone.Model.extend()
var Vehicles = Backbone.Collection.extend({
  model: Vehicle
})


var VehicleView = Backbone.View.extend({
  tagName: 'li',
  events: {
    "click .delete": "onDeleteClick"
  },
  onDeleteClick: function() {
    this.remove()
  },
  render: function() {
    this.$el.html(this.model.get("name") + " " + this.model.get("registrationNumber") + " <button class='delete'>Delete</button>");
    this.$el.attr("data-color", this.model.get("color"))
    return this
  }
})
var VehiclesView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    var self = this;
    this.model.each(function(vehicle) {
      var vehicleView = new VehicleView({model: vehicle});
      self.$el.append(vehicleView.render().$el)
    })
  }
})
var vehicles = new Vehicles([
  { name: 'car1', registrationNumber: "12345", color: "Blue"},
  { name: 'car2', registrationNumber: "avcde", color: "Red"},
  { name: 'car3', registrationNumber: "1erda", color: "Green"}
]);
var vehiclesView = new VehiclesView({ el: '#vehicles', model: vehicles});
vehiclesView.render();
