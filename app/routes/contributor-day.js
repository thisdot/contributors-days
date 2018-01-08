import Ember from 'ember';

import ScrollTop from '../mixins/scroll-top';

let days = {
  rxjs: 'contributor-day-rxjs-2017',
  angular: 'contributor-day-angular-2017-apr',
  react: 'contributor-day-react-2017',

};

export default Ember.Route.extend(ScrollTop, {
  model({ framework }) {
    if (days[framework]) {
      framework = days[framework];
    }
    return this.store.findRecord('page', framework);
  }
});
