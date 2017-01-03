import Author from 'ember-writer/models/author';
import attr from 'ember-data/attr';

export default Author.extend({
  title: attr('string'),
  twitter: attr('string'),
  github: attr('string'),
  featured: attr('string'),
  image: attr('string'),
  order: attr('number')
});
