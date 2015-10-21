import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log("Model hook form `bands.band` called with", params.slug)
    var bands = this.modelFor('bands');
    return bands.get('content').findBy('slug', params.slug);
  },

  afterModel: function(band) {
    var description = band.get('description');
    if (Ember.isEmpty(description)) {
      this.transitionTo('bands.band.songs');
    } else {
      this.transitionTo('bands.band.details');
    }
  }
});