import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | snapshot', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Snapshot />`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),
      [
        'Abeid Ahmed',
        '·',
        '1h',
        'Dom Event listeners',
        '#',
        'UI/UX',
        '#',
        'Design',
        '43',
        '21k',
        '12',
      ]
    );
  });
});
