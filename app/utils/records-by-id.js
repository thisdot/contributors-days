import Ember from 'ember';

const {
  computed
} = Ember;

export default function recordsById(path, type) {
  return computed(`${path}.[]`, function() {
    let store = this.get('store');
    let attendees = this.get(path) || [];
    return attendees.map(slug => store.peekRecord(type, slug)).filter(item => item);
  });
}
