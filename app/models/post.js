import Post from 'ember-writer/models/post';
import attr from 'ember-data/attr';

export default Post.extend({
  location: attr(),
  apply: attr(),
  framework: attr(),
  attendees: attr('array'),
  leads: attr('array')
});
