import humanize from './humanize';

export default function arrayAttributeFinder(array, type) {
  if (!array.length) return null;

  for (let elementType of array) {
    if (elementType.attribute.toLowerCase() === type.toLowerCase()) {
      return `${humanize(elementType.attribute)} ${elementType.message}`;
    }
  }
}
