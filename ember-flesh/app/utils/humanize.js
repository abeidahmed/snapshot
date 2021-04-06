export default function humanize(string) {
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

  return capitalizedString.split('_').join(' ');
}
