import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('band');
  },

  afterModel: function(model) {
    var bands = model;
    if (bands.lenght === 1) {
      this.transitionTo('bands.band', bands.get('firstObject'));
    }
  },

  actions: {
    createBand: function() {
      var route = this, controller = this.get('controller');

      var band = this.store.createRecord('band', controller.getProperties('name'));
      band.save().then(function() {
        controller.set('name', '');
        route.transitionTo('bands.band.songs', band);
      });
    },

    didTransition: function() {
      document.title = 'Bands - Rock & Roll';
    }
  }
});
