import Ember from 'ember';

const {
  inject: { service },
  run: { scheduleOnce }
} = Ember;

export default Ember.Component.extend({
  scroller: service(),
  fastboot: service(),

  didInsertElement() {
    this._super(...arguments);

    scheduleOnce('afterRender', this, this.scrollTo);
  },

  scrollTo() {
    let { hash } = window.location;

    if (hash) {
      let el = this.$(hash);
      this.get('scroller').scrollVertical(el);
    }
  }
});
