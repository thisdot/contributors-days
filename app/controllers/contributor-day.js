import Ember from 'ember';
import recordsById from '../utils/records-by-id';

export default Ember.Controller.extend({
  attendees: recordsById('model.event.attendees', 'author'),
  leads: recordsById('model.event.leads', 'author')
});
