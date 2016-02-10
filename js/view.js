//views
//responsible for rendering the content
//and handling changes in the model and handling the dom events
//more like controllers in MVC. have a referemce to a DOM element

// var SongView = Backbone.View.extend({
//   render: function() {
//     this.$el.html("hello World!")
//     return this;
//   }
// })
// var songView = new SongView({ el: "#container"});
// songView.render();
//or
// var SongView = Backbone.View.extend({
//   render: function() {
//     this.$el.html("hello World!")
//     return this;
//   }
// })
// var songView = new SongView();
// songView.render();
// $("#container").html(songView.$el)


var SongView = Backbone.View.extend({
  tagName: "span",
  className: "song",
  id: "1234",
  attributes: {
    "data-genre": "Rock"
  },
  render: function() {
    this.$el.html("hello World!")
    return this;
  }
})
var songView = new SongView();
// songView.render();
// $("#container").html(songView.$el)
$("#container").html(songView.render().$el)
