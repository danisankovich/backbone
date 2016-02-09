//Collections. similar to building models.
// console.log('test')
// var Song = Backbone.Model.extend();
// var Songs = Backbone.Collection.extend({
//   model: Song
// });
// var songs = new Songs([
//   new Song({ title: "song1"}),
//   new Song({ title: "song2"}),
//   new Song({ title: "song3"})
// ]);
// songs.add(new Song({title: "song4"}));
//every collection has a length and models property, use the at or get method to access the models.
//songs.at(0) gets the first model in the collection
//or songs.get("c1")  //it gets by cid=>client id.
// songs.remove(songs.at(0)) //removes the specified model from the collection

//collections provide an easy way to work with models.

// ====================================
// ====================================
// ====================================
// ====================================
// ====================================
var Song = Backbone.Model.extend();
var Songs = Backbone.Collection.extend({
  model: Song,
  url: '/api/songs'
});
var songs = new Songs();
songs.add(new Song({title: "song1", genre: "Rock", downloads: 110}), {at: 0});
//that second argument specifies where the model gets added to the collection

songs.push(new Song({ title: 'song2', genre: "emo", downloads: 90})); //another way to add to a collection
songs.push(new Song({ title: 'song3', genre: "Classic", downloads: 190})); //another way to add to a collection
songs.push(new Song({ title: 'song4', genre: "Country", downloads: 10})); //another way to add to a collection

//push and add act the same by default, but add lets you specify an index. (push is stack)

var rockSongs = songs.where({genre: "Rock"}); //returns array
var firstRockSong = songs.findWhere({genre: "Rock"}) //returns fiurst instant
var filteredSong = songs.where({genre: "Rock", title: "song1"}) //can have multiple search parametesr
console.log("Rock Songs", rockSongs)
console.log("First Rock Songs", firstRockSong)
console.log("filtered Rock Songs", filteredSong)

var topDownloads = songs.filter(function(song) {
  return song.get("downloads") > 100;
})
console.log("Top Downloads", topDownloads)
// .filter returns a true or false and if true returns that value in an array with other true values

songs.each(function(song) { //iterates over each model in the collection
  console.log(song)
})
