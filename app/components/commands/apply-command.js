import Ember from 'ember';
const { computed, isPresent } = Ember;

export default Ember.Component.extend({
  frameworks: {
    rxjs: 'https://goo.gl/forms/ZHeeaJmjiJgYH0Vv2',
    angular: 'https://goo.gl/forms/7A8UgHlLCk8eomSx2',
    react: 'https://goo.gl/forms/3YbuBqtVmqH7sLiB3'
  },

  valid: computed('options.[]', function() {
    let frameworks = this.get('frameworks');
    let [tag, selected] = this.get('options');
    if (tag !== '--to') {
      return false;
    }
    selected = selected.toLowerCase();
    return isPresent(frameworks[selected]);
  }),

  link: computed('options.[]', function() {
    let frameworks = this.get('frameworks');
    let [, selected] = this.get('options');
    selected = selected.toLowerCase();
    return frameworks[selected];
  })

});
