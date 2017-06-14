import ApplicationAdapter from 'ember-writer/adapters/application';
import config from '../config/environment';

const {
  host
} = config;

export default ApplicationAdapter.extend({
  host,
  namespace: 'api/blog'
});
