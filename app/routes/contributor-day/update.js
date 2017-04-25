import Ember from 'ember';

export default Ember.Route.extend({
  model({update_id}) {
    return this.store.findRecord('post', update_id);
  },
  actions: { 
    navigateToContributorsDay() {
      this.transitionTo('contributor-day', this.modelFor('contributor-day'));
    }
  }
});
