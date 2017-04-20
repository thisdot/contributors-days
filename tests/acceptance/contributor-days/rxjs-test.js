import { test } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contributor-days/rxjs');

test('visiting /contributor-days/rxjs', function(assert) {
  visit('/contributor-days/rxjs');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/rxjs');
  });

  [
    "Ben Lesh", 
    "Paul Taylor", 
    "Jay Phelps"
  ].forEach(name => showsPerson(name, '.leads-list'));

  [
    "Igor Minar",
    "Andre Staltz",
    "Uri Goldshtein",
    "Evan You",
    "Jon Kuperman",
    "Jeff Cross",
    "Matthew Dapena-Tretter",
    "Aysegul Yönet",
    "Minko Gechev",
    "Paul Betts",
    "Bill Barnes",
    "OJ Kwon",
    "Alex Castillo",
    "Kyle Kelley",
    "Bill Odom",
    "Mostafa Eweda",
    "Hagai Cohen",
    "Rob Wormald"
  ].forEach(name => showsPerson(name, '.attendees-list'));


  andThen(function() {
    assert.ok($('.videos-list').length, 'Videos playlist is visible');
    assert.equal($('.videos-list .list-item').length, 10, '10 videos are show');
  });
});
