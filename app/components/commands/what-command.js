import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  verbose: computed('options.[]', function() {
    debugger;
    return this.get('options')[0] === '--verbose';
  })
});
