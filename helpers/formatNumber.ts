const formatNumber = (number: number): string =>
  new Intl.NumberFormat().format(number);

export default formatNumber;
