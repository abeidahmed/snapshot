import arrayAttributeFinder from 'ember-flesh/utils/array-attribute-finder';
import { module, test } from 'qunit';

module('Unit | Utility | array-attribute-finder', function () {
  test('it merges array attributes into a sentence', function (assert) {
    const errors = [
      {
        attribute: 'email_address',
        message: 'is invalid',
      },
      {
        attribute: 'name',
        message: 'cannot be blank',
      },
    ];

    const error = arrayAttributeFinder(errors, 'NAME');
    assert.equal(error, 'Name cannot be blank');

    const error_2 = arrayAttributeFinder(errors, 'email_address');
    assert.equal(error_2, 'Email address is invalid');

    const error_3 = arrayAttributeFinder([], 'email_address');
    assert.equal(error_3, null);
  });
});
