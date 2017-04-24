import Ember from 'ember';
import moment from 'moment';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['col-md-6', 'row', 'day-card'],
  // classNameBindings: ['hasImage:row'],
  hasImage: computed.notEmpty('event.featuredImage'),
  hasVideos: computed.notEmpty('event.videos'),

  isPast: computed('event.date', function() {
    let today = moment();
    let eventDate = moment(this.get('event.date'));
    return today.isAfter(eventDate, 'day');
  }),
  isFuture: computed.not('isPast'),

  canApply: computed.notEmpty('event.apply')
});
