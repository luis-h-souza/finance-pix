export function cepMask(value) {
  return value
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2-$3')
    .replace(/(-\d{3})\d+?$/, '$1');
}
