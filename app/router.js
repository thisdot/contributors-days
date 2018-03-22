import Ember from 'ember';
import config from './config/environment';
import Trackable from 'ember-cli-analytics/mixins/trackable';

const Router = Ember.Router.extend(Trackable, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contributor-day', { path: '/contributor-days/:framework' }, function() {
    this.route('update', { path: '/update/:update_id'});
  });
  this.route('about');
  this.route('sponsors');
  this.route('archived-contributor-day', { path: '/past-contributor-days/:event'});
});

export default Router;
