export const getFormattedDate = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minutes}`;
};
