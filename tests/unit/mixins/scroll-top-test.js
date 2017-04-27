import Ember from 'ember';
import ScrollTopMixin from 'contributors-days/mixins/scroll-top';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll top');

// Replace this with your real tests.
test('it works', function(assert) {
  let ScrollTopObject = Ember.Object.extend(ScrollTopMixin);
  let subject = ScrollTopObject.create();
  assert.ok(subject);
});
