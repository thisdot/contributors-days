import Ember from 'ember';
const { computed, get } = Ember;

export default Ember.Controller.extend({
  attendees: computed('model.event.slug', 'model.people', function() {
    let people = this.get('model.people');
    let eventKey = `cd-${this.get('model.event.slug')}`;
    return people.filter((person) => {
      return get(person, 'featured').includes(eventKey);
    }).sortBy('order');
  }),

  leads: computed('model.event.slug', 'model.people', function() {
    let people = this.get('model.people');
    let eventKey = `lead-${this.get('model.event.slug')}`;
    return people.filter((person) => {
      return get(person, 'featured').includes(eventKey);
    }).sortBy('order');
  })
});
