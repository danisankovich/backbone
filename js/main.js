//updating the view

// var Song = Backbone.Model.extend({
//   defaults: {
//     listeners: 0
//   }
// });
//
// var SongView = Backbone.View.extend({
//   initialize: function() { //when something changes (like a new listener), it will update the dom
//     this.model.on("change", this.render, this);//on chnage, register the render method, set the context (in this case, to the view itself when the render method is called)
//   },
//   render: function() {
//     this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
//     return this
//   }
// });
//
// var song = new Song({title: "Teenagers"});
// var songView = new SongView({ el: "#songs", model: song});
// songView.render();

//==========================================
//==========================================
//==========================================
//==========================================
//handling collection events

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
})

var SongView = Backbone.View.extend({
  tagName: "li",
  render: function() {
    this.$el.html(this.model.get("title"));
    return this
  }
});

var SongsView = Backbone.View.extend({
  tagName: "ul",
  initialize: function() {
    this.model.on("add", this.onSongAdded, this);
  },
  onSongAdded: function(song) {
    var songView = new SongView({ model: song});
    this.$el.append(songView.render().$el);
  },
  render: function() {
    var self = this;
    this.model.each(function(song) {
      var songView = new SongView({ model: song});
      self.$el.append(songView.render().$el);
    })
  }
})

var songs = new Songs([
  new Song({ title: "Teenagers"}),
  new Song({ title: "Summer Song"}),
  new Song({ title: "Shut Up And Dance"}),
])
var songsView = new SongsView({ el: "#songs", model: songs});
songsView.render();
