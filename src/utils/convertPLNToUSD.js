export const convertPLNToUSD = (PLN) => {
  
  if(typeof PLN === 'string') {
    return NaN; 
  } else if (typeof PLN !== 'string' && typeof PLN !== 'number'){
    return 'Error';
  }
  const PLNtoUSD = PLN / 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(PLNtoUSD);
}