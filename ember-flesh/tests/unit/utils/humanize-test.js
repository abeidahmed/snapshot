import humanize from 'ember-flesh/utils/humanize';
import { module, test } from 'qunit';

module('Unit | Utility | humanize', function () {
  test('it humanizes the string', function (assert) {
    const result = humanize('email_address');
    assert.equal(result, 'Email address');
  });
});
