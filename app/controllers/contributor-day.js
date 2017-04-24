import Ember from 'ember';
import moment from 'moment';
import recordsById from '../utils/records-by-id';
const { computed } = Ember;

export default Ember.Controller.extend({
  attendees: recordsById('model.attendees', 'author'),
  leads: recordsById('model.leads', 'author'),
  isPast: computed('model.date', function() {
    let today = moment();
    let eventDate = moment(this.get('model.date'));
    return today.isAfter(eventDate, 'day');
  }),
  isFuture: computed.not('isPast'),
});
