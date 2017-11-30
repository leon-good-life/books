const formatDate = dateString => {
  const date = new Date(dateString);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  // it is not a bug: date.getMonth() returns month from 0 to 11.
  return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default formatDate;
