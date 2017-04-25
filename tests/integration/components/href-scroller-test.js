import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('href-scroller', 'Integration | Component | href scroller', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{href-scroller}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#href-scroller}}
      template block text
    {{/href-scroller}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
