import humanize from './humanize';

export default function arrayAttributeFinder(array, type) {
  if (!array.length) return null;

  for (let error of array) {
    if (error.attribute.toLowerCase() === type.toLowerCase()) {
      return `${humanize(error.attribute)} ${error.message}`;
    }
  }
}
