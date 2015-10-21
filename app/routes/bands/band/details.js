import Ember from 'ember';

export default Ember.Route.extend({
  // Como exemplo aqui, não precisamos do hook model já que é um padrao comum
  // reutilizar model da rota pai. As rotas filhas herdam o hook model do pai
  // por padrao
  // model: function() {
  //   return this.modelFor('bands.band');
  // }

  actions: {
    willTransition: function(transition) {
      var controller = this.get('controller'), leave;

      if (controller.get('isEditing')) {
        leave = window.confirm('You have unsaved changes. Are you sure you want to leave?');
        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    }
  }
});
