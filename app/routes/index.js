import Ember from 'ember';
const { RSVP: { hash }, isPresent } = Ember;

export default Ember.Route.extend({
  model() {
    let events = this.store.findAll('page');
    let posts = this.store.findAll('post');

    return hash({
      events: events.then(events => events.filter(event => isPresent(event.get('framework')))),
      posts
    });
  }
});
