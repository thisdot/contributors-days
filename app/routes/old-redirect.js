import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params;
  },
  redirect({ framework }) {
    this.transitionTo('contributor-day', framework);
  }
});
