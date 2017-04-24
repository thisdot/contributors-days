import Ember from 'ember';
const { RSVP: { hash } } = Ember;

export default Ember.Route.extend({
  model() {
    let events = this.store.findAll('page');
    let posts = this.store.findAll('post');

    return hash({
      events,
      posts
    });
  }
});
