import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | testeroo', function(hooks) {
  setupRenderingTest(hooks);

  test('it starts at zero', async function(assert) {
    await render(hbs`<Testeroo />`);

    assert.dom('[data-test-count]').hasText('Current: 0');
  });

  test('can be incremented', async function(assert) {
    await render(hbs`<Testeroo />`);

    assert.dom('[data-test-count]').hasText('Current: 0', 'precond');

    await click('button');

    assert.dom('[data-test-count]').hasText('Current: 1');
  });
});
