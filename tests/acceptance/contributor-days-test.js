import { test } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contributor days');

function redirectTest(slug) {
  test(`visiting /contributor-day/${slug} redirects to /${slug}`, function(assert) {
    visit(`/contributor-day/${slug}`);

    andThen(function() {
      assert.equal(currentURL(), `/${slug}`);
    });
  });
}

redirectTest('angular');
redirectTest('rxjs');
redirectTest('react');

