import Ember from 'ember';

const { computed } = Ember;

let READMORE = /^.*READMORE.*$/gmi;

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['article-card'],
  showSummary: false,
  showContent: true,

  hasReadMore: computed('post.body', function() {
    let body = this.get('post.body');
    return !!body.match(READMORE);
  }),

  body: computed('post.body', function() {
    let body = this.get('post.body');
    return body.replace(READMORE, '');
  })
});
