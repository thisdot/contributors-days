import Ember from 'ember';
import config from './config/environment';
import Trackable from 'ember-cli-analytics/mixins/trackable';
import RouterScroll from 'ember-router-scroll';

const Router = Ember.Router.extend(Trackable, RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contributor-day', { path: '/contributor-days/:framework' });
  this.route('about');
  this.route('updates');
});

export default Router;
