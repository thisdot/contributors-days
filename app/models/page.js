import Page from 'ember-writer/models/page';
import attr from 'ember-data/attr';
import moment from 'moment';
import Ember from 'ember';

const { computed } = Ember;

export default Page.extend({
  location: attr(),
  apply: attr(),
  framework: attr(),
  attendees: attr('array'),
  leads: attr('array'),
  videos: attr('array'),
  video: attr(),
  playlist: attr(),
  date: attr('date'),
  featuredImage: attr(),
  message: attr('string'),

  isPast: computed('date', function() {
    let today = moment();
    let eventDate = moment(this.get('date'));
    return today.isAfter(eventDate, 'day');
  }),

  isFuture: computed.not('isPast'),

  isApplyOpen: computed.and('isFuture', 'date')
});
