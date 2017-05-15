import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('showsPerson', function(app, name, context) {
  findWithAssert(`.person-card:contains(${name})`, context);
});
