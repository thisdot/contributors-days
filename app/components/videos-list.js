import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['videos-list'],
  selected: computed.oneWay('videos.firstObject')
});
