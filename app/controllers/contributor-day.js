import Ember from 'ember';
import recordsById from '../utils/records-by-id';
const { computed } = Ember;

export default Ember.Controller.extend({
  attendees: recordsById('model.attendees', 'author'),
  leads: recordsById('model.leads', 'author'),
  moderators: recordsById('model.moderators', 'author'),
  tag: computed('model.framework', function() {
    return this.store.find('tag', this.get('model.framework'));
  }),
  updates: computed.oneWay('tag.posts')
});
