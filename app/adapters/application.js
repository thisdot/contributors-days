import ApplicationAdapter from 'ember-writer/adapters/application';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  host: config.host,
  namespace: config.namespace || 'api/blog'
});
