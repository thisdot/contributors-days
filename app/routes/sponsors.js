import Ember from 'ember';

import ScrollTop from '../mixins/scroll-top';

export default Ember.Route.extend(ScrollTop, {
  model() {
    return this.store.findRecord('page', 'sponsors');
  }
});
