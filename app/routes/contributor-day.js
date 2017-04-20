import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({
  model({ framework }) {
    let people = this.store.findAll('author');
    let event = this.store.findAll('post')
      .then((events) => {
        return events.findBy('slug', framework);
      });

    return RSVP.hash({
      people,
      event
    });
  }
});
