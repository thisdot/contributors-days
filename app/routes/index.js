import Ember from 'ember';
import ScrollTop from '../mixins/scroll-top';
const { RSVP: { hash }, isPresent } = Ember;

export default Ember.Route.extend(ScrollTop, {
  model() {
    let events = this.store.findAll('page');
    let posts = this.store.findAll('post');

    return hash({
      events: events.then(events => events.filter(event => isPresent(event.get('framework')))),
      posts
    });
  }
});
