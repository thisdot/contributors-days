import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Route.extend({
  header: service(),

  activate() {
    this.set('header.showTerminal', true);
  },

  deactivate() {
    this.set('header.showTerminal', false);
  }
});
