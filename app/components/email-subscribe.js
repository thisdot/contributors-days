import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  inject: { service }
} = Ember;

const action = 'https://us-central1-this-dot.cloudfunctions.net/contributorDaysSubscribe';

export default Ember.Component.extend({
  ajax: service(),

  submitTask: task(function *(data) {
    return yield this.get('ajax').post(action, {
      data
    });
  }).restartable(),

  actions: {
    submit() {
      let data = this.getProperties([
        'name', 
        'company',
        'email'
      ]);

      this.get('submitTask').perform(data);
    }
  }
});
