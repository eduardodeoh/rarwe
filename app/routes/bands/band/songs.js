import Ember from 'ember';

import Song from '../../../models/song';

// import wait from '../../../utils/wait';

import { capitalize as capitalizeWords } from '../../../helpers/capitalize';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },

  actions: {
    createSong: function() {
      var controller = this.get('controller'), band = this.modelFor('bands.band');
      var song = this.store.createRecord('song', { title: controller.get('title'), band: band});
      song.save().then(function() {
        controller.set('title', '');
      });
    },

    didTransition: function() {
      var band = this.modelFor('bands.band');
      var name = capitalizeWords(band.get('name'));
      document.title = `${band.get('name')} songs - Rock & Roll`;
    },
  }
});
