import { skip } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contributor days/vue');

skip('visiting /contributor-days/vue', function(assert) {
  visit('/contributor-days/vue');

  andThen(function() {
    let contributorDay = find('.title strong').text().trim();

    assert.equal(contributorDay, 'vue');
    assert.equal(find('.framework-sign-up').length, 1, 'Signup component is visible');
    assert.equal(currentURL(), '/contributor-days/vue');
  });
});
