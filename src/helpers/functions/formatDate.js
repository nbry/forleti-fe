function formatDate(dateTimeFromPython) {
  // prettier-ignore
  const months = ["Jan", "Feb", "Mar", "Apr", "May",
    "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const dateTime = new Date(dateTimeFromPython);
  const hour = dateTime.getHours() !== 0 ? dateTime.getHours() % 12 : 12;
  const meridiem = dateTime.getHours() < 12 ? "AM" : "PM";
  const minute =
    dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : dateTime.getMinutes();
  const month = months[dateTime.getMonth()];
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();

  const formattedDate = `${hour}:${minute} ${meridiem} - ${month} ${date}, ${year}`;
  return formattedDate;
}

export default formatDate;
