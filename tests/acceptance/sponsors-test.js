import { test } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sponsors');

test('visiting /sponsors', function(assert) {
  visit('/sponsors');

  andThen(function() {
    assert.equal(currentURL(), '/sponsors');
  });
});
