import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | show-form-error', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the form error for the given type', async function (assert) {
    const errors = [
      {
        attribute: 'name',
        message: 'cannot be blank',
      },
    ];
    this.set('errors', errors);
    this.set('type', 'name');

    await render(hbs`{{show-form-error type errors=errors}}`);

    assert.equal(this.element.textContent.trim(), 'Name cannot be blank');
  });
});
