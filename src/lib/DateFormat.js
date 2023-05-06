export default function DateFormat(currentDate) {
  const provideDate = new Date(currentDate);
  const date = provideDate.getDate();
  /* for int month */
  // const month = provideDate.getMonth() + 1

  /* for string month */
  const month = provideDate.toDateString();
  const monthFormat = month.split(" ");
  const year = provideDate.getFullYear();
  return `${date} ${monthFormat[1]} ${year}`;

  /* when need date format as a object */
  // return {
  //   date,
  //   month: monthFormat[1],
  //   year,
  // };
}
