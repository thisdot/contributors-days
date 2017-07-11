/* global showsPerson */
import { test } from 'qunit';
import moduleForAcceptance from 'contributors-days/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contributor days/angular');

test('visiting /contributor-days/angular', function(assert) {
  visit('/contributor-days/angular');

  andThen(function() {
    assert.equal(currentURL(), '/contributor-days/angular');
  });

  [
    "Igor Minar", 
    "Brad Green", 
    "Stephen Fluin", 
    "Alex Eagle", 
    "Rob Wormald"
  ].forEach(name => showsPerson(name, '.leads-list'));

  [
    "Ben Lesh", 
    "Uri Goldshtein", 
    "Tara Manicsic", 
    "Aysegul Yönet", 
    "Minko Gechev", 
    "Tracy Lee", 
    "John Papa", 
    "Mike Brocchi", 
    "Shmuela Jacobs", 
    "Ward Bell", 
    "Josh Thomas", 
    "Victor Savkin", 
    "Pascal Precht", 
    "Sean Landsman", 
    "Matt Davis", 
    "Steven Kampen", 
    "Mike Ryan", 
    "Deborah Kurata", 
    "Justin Schwartzenberger", 
    "Igor Kamenetsky", 
    "Bill Odom"
  ].forEach(name => showsPerson(name, '.attendees-list'));

  andThen(function(){
    assert.equal(find('.leads-list .person-card').length, 5, '5 leads displayed');
    assert.equal(find('.attendees-list .person-card').length, 21, '21 attendees displayed');
    assert.equal(find('.sponsors-list').length, 1, 'Sponsors list is displayed');
  });

});
