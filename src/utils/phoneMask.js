export function phoneMask(value) {
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  value = value.replace(/(-\d{4})\d+?$/, '$1');
  return value;
}
