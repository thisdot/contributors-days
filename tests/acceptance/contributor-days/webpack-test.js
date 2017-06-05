import { test } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contributor days/webpack');

test('visiting /contributor-days/webpack', function(assert) {
  visit('/contributor-days/webpack');

  andThen(function() {
    let contributorDay = find('.title strong').text().trim();

    assert.equal(contributorDay, 'webpack');
    assert.equal(find('.framework-sign-up').length, 1, 'Signup component is visible');
    assert.equal(currentURL(), '/contributor-days/webpack');
  });
});
