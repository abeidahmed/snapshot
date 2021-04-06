function humanize(string) {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

  return capitalizedString.split('_').join(' ');
}

export default function arrayAttributeFinder(array) {
  const attributeName = humanize(array[0].attribute);

  return `${attributeName} ${array[0].message}`;
}
