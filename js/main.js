//updating the view

var Song = Backbone.Model.extend({
  defaults: {
    listeners: 0
  }
});

var SongView = Backbone.View.extend({
  initialize: function() { //when something changes (like a new listener), it will update the dom
    this.model.on("change", this.render, this);//on chnage, register the render method, set the context (in this case, to the view itself when the render method is called)
  },
  render: function() {
    this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
    return this
  }
});

var song = new Song({title: "Teenagers"});
var songView = new SongView({ el: "#songs", model: song});
songView.render();
