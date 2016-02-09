var Song = Backbone.Model.extend({//creates a Model. convention, they start with a capital letter
  defaults: {
    genre: "Rock" //if we do not set it ourselves, this gives defaults to the named attrivutes
  },
  initialize: function() {
    console.log("a new song has been created")
  }
});
var song = new Song();

//backbone models use attributes differently than javasript objects, which use them by referencing them
//in javascript
var person = {}
person.name = "Mike"

//in backbone use the set method
song.set({
  "title": "Teenagers",
  "artist": "My Chemical Romance"
})
// song.toJSON() to convert to JSON object
//remove an attribute by using unset method .unset("attributeName")
//remove all attributes on a modle by calling the clear method .clear()
