import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Mixin.create({
  fastboot: service(),
  activate() {
    if (!this.get('fastboot.isFastboot')) {
      $(window).scrollTop();
    }
  }
});
