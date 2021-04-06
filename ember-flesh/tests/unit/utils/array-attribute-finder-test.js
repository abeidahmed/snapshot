import arrayAttributeFinder from 'ember-flesh/utils/array-attribute-finder';
import { module, test } from 'qunit';

module('Unit | Utility | array-attribute-finder', function () {
  test('it merges array attributes into a sentence', function (assert) {
    const errors = [
      {
        attribute: 'email_address',
        message: 'is invalid',
      },
    ];

    const result = arrayAttributeFinder(errors);
    assert.equal(result, 'Email address is invalid');
  });
});
