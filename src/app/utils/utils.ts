export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1)
    .toString()
    .padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return [year, month, day].join('-');
}

export const getRemainingDaysFromToday = (expiry: number) => {
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const timeDiff = (expiry - new Date().getTime());
  return Math.ceil(timeDiff / millisecondsInADay);
}
