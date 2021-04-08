import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | snapshot/new-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Snapshot::NewForm />`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
      [
        'Website URL',
        'Public snapshot',
        'Anyone on the internet can see this snapshot.',
        'Private snapshot',
        'Only you can see this snapshot.',
        'Share snapshot',
      ]
    );
  });
});
