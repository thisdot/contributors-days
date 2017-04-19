import { moduleFor, test } from 'ember-qunit';

moduleFor('transform:array', 'Unit | Transform | array', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let transform = this.subject();
  assert.ok(transform);
});

test('it deserializes strings to array', function(assert) {
  let transform = this.subject();
  assert.deepEqual(transform.deserialize('unassigned'), ['unassigned']);
});

test('it deserializes arrays without change', function(assert) {
  let transform = this.subject();
  assert.deepEqual(transform.deserialize(['rxjs', 'angular']), ['rxjs', 'angular']);
});
