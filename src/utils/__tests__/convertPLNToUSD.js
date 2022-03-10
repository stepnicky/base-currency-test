import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('3')).toBeNaN();
    expect(convertPLNToUSD('wfrg')).toBeNaN();
    expect(convertPLNToUSD('56zł')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD('')).toBeNaN();
  });
  it('should return "Error" when input is neither text nor a number', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
    expect(convertPLNToUSD(true)).toBe('Error');
    expect(convertPLNToUSD(false)).toBe('Error');
  });
});