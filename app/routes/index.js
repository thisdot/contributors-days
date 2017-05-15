import Ember from 'ember';
import ScrollTop from '../mixins/scroll-top';
const { RSVP: { hash }, isPresent, set } = Ember;

export default Ember.Route.extend(ScrollTop, {
  model() {
    let pages = this.store.findAll('page', { reload: true});
    let posts = this.store.findAll('post');

    return hash({
      pages,
      posts
    });
  },

  afterModel(model) {
    let { pages } = model;
    let events = pages.filter(event => isPresent(event.get('framework')));
    set(model, 'events', events);
  }
});
