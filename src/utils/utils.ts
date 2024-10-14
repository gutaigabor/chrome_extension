import { GRAY, SLATE, ZINC } from "../constants/sizes"

export const color = (colorScheme: string) => {
  switch (colorScheme) {
    case GRAY:
      return 'bg-gray-900'
    case ZINC:
      return 'bg-zinc-900'
    case SLATE:
      return 'bg-slate-900'
  }
}

// Convert timestamp to a more readable format
export const formattedDatetime = (dateStr: string) => {
  const date = new Date(dateStr);

  const readableDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short"
  });

  return readableDate;
}