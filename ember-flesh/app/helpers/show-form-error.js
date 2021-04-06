import { helper } from '@ember/component/helper';
import arrayAttributeFinder from '../utils/array-attribute-finder';

export default helper(function showFormError([errorType], hash) {
  return arrayAttributeFinder(hash.errors, errorType);
});
