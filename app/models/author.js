import Author from 'ember-writer/models/author';
import attr from 'ember-data/attr';

export default Author.extend({
  title: attr(),
  twitter: attr(),
  github: attr(),
  image: attr()
});
