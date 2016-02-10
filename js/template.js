// view templates
var Song = Backbone.Model.extend();
var SongView = Backbone.View.extend({
  render: function() {
    var template = _.template($("#songTemplate").html());
    var html = template(this.model.toJSON()); //underscore expects JSON style
    this.$el.html(html)
    return this;
  }
});

var song = new Song({title: "Teenagers", plays: 1001});
var songView = new SongView({ el: "#songs", model: song });
songView.render();
