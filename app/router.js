import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contributor-day', { path: 'contributor-days/:framework' });
  this.route('health-checker', { path: '_ah' }, function() {
    this.route('health');
  });
});

export default Router;
