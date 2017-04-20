import Page from 'ember-writer/models/page';
import attr from 'ember-data/attr';

export default Page.extend({
  location: attr(),
  apply: attr(),
  framework: attr(),
  attendees: attr('array'),
  leads: attr('array')
});