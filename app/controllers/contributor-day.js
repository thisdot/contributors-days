import Ember from 'ember';
import recordsById from '../utils/records-by-id';

export default Ember.Controller.extend({
  attendees: recordsById('model.attendees', 'author'),
  leads: recordsById('model.leads', 'author')
});
