import { test, skip } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting rxjs contributor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(RxJS)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/rxjs');
  });
});

test('visiting angular contributor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(Angular)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/angular');
  });
});

test('visiting react contributor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(React)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/react');
  });
});

skip('visiting vue contributor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(Vue)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/vue');
  });
});


