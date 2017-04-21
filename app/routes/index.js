import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Route.extend({
  header: service(),

  model() {
    return this.store.findAll('post');
  },

  activate() {
    this.set('header.showTerminal', true);
  },

  deactivate() {
    this.set('header.showTerminal', false);
  }
});
