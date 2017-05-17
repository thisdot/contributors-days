import { test } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting rxjs contibutor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(RxJS)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/rxjs');
  });
});

test('visiting angular contibutor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(Angular)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/angular');
  });
});

test('visiting react contibutor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(React)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/react');
  });
});

test('visiting webpack contibutor day page by clicking link on navbar', function(assert) {
  visit('/');

  click('a:contains(Webpack)');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/webpack');
  });
});


