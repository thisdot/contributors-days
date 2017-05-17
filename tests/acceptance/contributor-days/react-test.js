import { test } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contributor days/react');

test('visiting /contributor-days/react', function(assert) {
  visit('/contributor-days/react');

  andThen(function() {
    let contributorDay = find('.title strong').text().trim();

    assert.equal(contributorDay, 'react');
    assert.equal(find('.framework-sign-up').length, 1, 'Signup component is visible');
    assert.equal(currentURL(), '/contributor-days/react');
  });
});
