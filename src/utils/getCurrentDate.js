export function getCurrentDate(separator = " ") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][newDate.getMonth()];
  let year = newDate.getFullYear();

  return `${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}${separator}${year}`;
}
