import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

export const sinceFormat = (date: string) => {
  if (typeof date === "undefined") {
    return "sometime ago";
  }

  let newDate = dayjs(parseInt(date));
  return dayjs(dayjs(newDate)).fromNow().toString();
};

export const normalFormat = (date: string) => {
  let newDate = dayjs(parseInt(date)).format("MMM DD, YYYY");
  return newDate.toString();
};
