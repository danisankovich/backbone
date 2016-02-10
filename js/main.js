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

// var Song = Backbone.Model.extend()
// var Songs = Backbone.Collection.extend({
//   model: Song
// })
// var SongView = Backbone.View.extend({
//   tagName: "li",
//   render: function() {
//     this.$el.html(this.model.get("title"))
//     return this;
//   }
// })
// var SongsView = Backbone.View.extend({
//   render: function() {
//     var self = this
//     this.model.each(function(song) { //refers to collection passed to view
//       var songView = new SongView({ model: song}); //iteration passes in the current song
//       self.$el.append(songView.render().$el)//self so that scope is not lost
//     })
//   }
// })
// var songs = new Songs([
//   new Song({title:"Teenagers"}),
//   new Song({title:"So What"}),
//   new Song({title:"Summer Song"})
// ])
// var songsView = new SongsView({ el: "#songs", model: songs});
// songsView.render();

// =========================================
// =========================================
// =========================================
// =========================================
// =========================================
//event handlers

var Song = Backbone.Model.extend()

var SongView = Backbone.View.extend({
  events: {
    "click": "onClick",
    // "click :not(.bookmark)": "onClick",  //for clicking on all buttons without class bookmark
    "click .bookmark": "onClickBookmark"
  },
  onClick: function() {
    console.log('button clicked')
  },
  onClickBookmark: function() {
    console.log('bookmark clicked')
  },
  tagName: "li",
  render: function() {
    this.$el.html(this.model.get("title") + " <button>Listen</button><button class='bookmark'>Bookmark</button>")
    return this;
  }
})

var song = new Song({ title:"Teenagers"})
var songView = new SongView({ el: "#songs", model: song});
songView.render();
