function getLocalDate() {
  const now = new Date();
  let dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const localDateString = now.toLocaleDateString(locale, dateOptions);
  
  return localDateString;
}

console.log(getLocalDate()); // Example output: Friday, April 15, 2023
