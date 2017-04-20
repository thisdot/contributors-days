import Ember from 'ember';
import config from './config/environment';
import Trackable from 'ember-cli-analytics/mixins/trackable';

const Router = Ember.Router.extend(Trackable, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contributor-day', { path: '/contributor-days/:framework' });
  this.route('about');
});

export default Router;
