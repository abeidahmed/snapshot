function humanize(string) {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

  return capitalizedString.split('_').join(' ');
}

export default function arrayAttributeFinder(array, type) {
  if (!array.length) return null;

  for (let error of array) {
    if (error.attribute.toLowerCase() === type.toLowerCase()) {
      return `${humanize(error.attribute)} ${error.message}`;
    }
  }
}
