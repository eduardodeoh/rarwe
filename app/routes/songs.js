import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

// http://discuss.emberjs.com/t/replacing-sortablemixin-in-2-0/8574/4
// var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
//   sortProperties: ['rating'],
//   sortAscending: false,
//   content: []
// });

// Modo fallback para resolver problema acima
var SongCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['rating:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

var songs = SongCollection.create();

var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

// Devido ao problema acima de SortableMixin, comentando linhas abaixo
// songs.pushObject(blackDog);
// songs.pushObject(yellowLedbetter);
// songs.pushObject(pretender);
 songs.get('content').pushObjects([blackDog, yellowLedbetter, pretender])

export default Ember.Route.extend({
  model: function() {
    //return songs
    // fallback para o problema acima com SortableMixi
    return songs.get('sortedContent');
  }
});
