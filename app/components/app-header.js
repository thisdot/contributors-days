import Ember from 'ember';
const { inject: { service }, computed: { readOnly } } = Ember;

export default Ember.Component.extend({
  classNames: ['app-header'],
  classNameBindings: ['showTerminal'],
  menuOpen: false,

  header: service(),
  showTerminal: readOnly('header.showTerminal'),

  actions: {
    toggleMenu() {
      this.toggleProperty('menuOpen');
    }
  }
});
