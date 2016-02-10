//passing model to views
// var Song = Backbone.Model.extend()
// var SongView = Backbone.View.extend({
//   render: function() {
//     this.$el.html(this.model.get("title"))
//     return this;
//   }
// })
// var song = new Song({title: "Teenagers"})
// var songView = new SongView({ el: "#container", model: song});
// songView.render();


// =======================
// =======================
// =======================
// =======================
//passing collection to view

var Song = Backbone.Model.extend()
var Songs = Backbone.Collection.extend({
  model: Song
})
var SongView = Backbone.View.extend({
  tagName: "li",
  render: function() {
    this.$el.html(this.model.get("title"))
    return this;
  }
})
var SongsView = Backbone.View.extend({
  render: function() {
    var self = this
    this.model.each(function(song) { //refers to collection passed to view
      var songView = new SongView({ model: song}); //iteration passes in the current song
      self.$el.append(songView.render().$el)//self so that scope is not lost
    })
  }
})
var songs = new Songs([
  new Song({title:"Teenagers"}),
  new Song({title:"So What"}),
  new Song({title:"Summer Song"})
])
var songsView = new SongsView({ el: "#songs", model: songs});
songsView.render();
