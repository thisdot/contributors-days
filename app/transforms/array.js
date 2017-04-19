import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (typeof serialized === 'string') {
      return [serialized];
    } else {
      return serialized;
    }
  }
});
