// var Song = Backbone.Model.extend({//creates a Model. convention, they start with a capital letter
//   defaults: {
//     genre: "Rock" //if we do not set it ourselves, this gives defaults to the named attrivutes
//   },
//   initialize: function() {
//     console.log("a new song has been created")
//   }
// });
// var song = new Song();
//
// //backbone models use attributes differently than javasript objects, which use them by referencing them
// //in javascript
// var person = {}
// person.name = "Mike"
//
// //in backbone use the set method
// song.set({
//   "title": "Teenagers",
//   "artist": "My Chemical Romance"
// })
// song.toJSON() to convert to JSON object
//remove an attribute by using unset method .unset("attributeName")
//remove all attributes on a modle by calling the clear method .clear()
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
//validation

var Song = Backbone.Model.extend({
  validate: function(attrs) {
    if(!attrs.title) {
      return "Title is Required"
    }
  }
})
var song = new Song()
song.isValid(); //returns true or false baeed on validate
var lastError = song.validationError;


// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================

var Animal = Backbone.Model.extend({
  walk: function() {
    console.log("animal walking...")
  }
})
var Dog = Animal.extend({//inherits code from the base model
  walk: function() { //this will overwriute the walk method from animal
    Animal.prototype.walk.apply(this) //with this line, you will not overwrite, you will use both walk methods
    console.log("dog is walking")
  }
})
var dog = new Dog();
dog.walk()

//extend method extends inheritance hierarchy.

// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================
// ============================================================

//Connecting to the server

//fetch() GET
//save() POST/PUT (context. if it exists. PUT. if not, Post)
//destroy() DELETE

// var Song = Backbone.Model.extend({
//   urlRoot: '/api/songs/' tells that all songs are located at that route
// })
