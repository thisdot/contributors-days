import Ember from 'ember';
const { computed, get } = Ember;

export default Ember.Controller.extend({
  attendees: computed('model.event.slug', 'model.people', function() {
    let people = this.get('model.people');
    let slug = this.get('model.event.slug');
    let eventKey = `cd-${slug}`;

    return people.filter((person) => {
      let featured = get(person, 'featured');

      return featured.includes(eventKey);
    }).sortBy('order');
  }),

  leads: computed('model.event.slug', 'model.people', function() {
    let people = this.get('model.people');
    let slug = this.get('model.event.slug');
    let eventKey = `lead-${slug}`;

    return people.filter((person) => {
      let featured = get(person, 'featured');

      return featured.includes(eventKey);
    }).sortBy('order');
  })
});
