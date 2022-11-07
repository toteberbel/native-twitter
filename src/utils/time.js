export const getFormattedDate = (date = new Date()) => {
  date = new Date(date);
  const day = date.getDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = minutes.toString() + 0;
  }

  return `${day}/${month}/${year} ${hour}:${minutes}`;
};
