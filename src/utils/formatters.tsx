export const formatToNumberWithComas = (num: number) =>
  Number(num).toLocaleString("en-US");

export const formatNumberPrefix = (num: number) =>
  `${num > 0 ? "+" : ""}${num}`;

export const formatPercentage = (num: number) => `${num}%`;
